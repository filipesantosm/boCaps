import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import { maskCEP } from '../../utils/mask';
import {
  ILocalePermissionForm,
  LocalePermissionSchema,
} from '../../validations/LocalePermissionSchema';
import Loading from '../Loading/Loading';
import MaskedInput from '../MaskedInput/MaskedInput';
import {
  ErrorMessage,
  Field,
  FilledButton,
  Form,
  Input,
  Label,
  SelectLabel,
  Toggle,
  ToggleLabel,
} from './styles';

interface Props {
  onSuccess: () => void;
}

const LocalePermissionForm = ({ onSuccess }: Props) => {
  const [isVerifyingCep, setIsVerifyingCep] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCepValid, setIsCepValid] = useState(false);

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    setError,
    trigger,
  } = useForm<ILocalePermissionForm>({
    resolver: yupResolver(LocalePermissionSchema),
  });

  const handleSearchCep = async () => {
    const cepFieldValid = await trigger('cep');

    if (!cepFieldValid) {
      return;
    }

    const cep = getValues('cep');

    setIsVerifyingCep(true);

    try {
      const cepFormatted = cep.replace('-', '');

      if (cepFormatted.length >= 8) {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cepFormatted}/json/`,
        );

        if (data.erro) {
          handleError('CEP não encontrado');
          setError('cep', {
            message: 'CEP não encontrado',
            type: 'inexistent-cep',
          });
          return;
        }

        reset({
          stateName: data.uf,
          cityName: data.localidade,
          cityIBGECod: data.ibge?.toString(),
          stateIBGECod: data.ibge?.toString()?.substring(0, 2),
          cityPermisson: false,
          statePermission: false,
        });
        setIsCepValid(true);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsVerifyingCep(false);
    }
  };

  const onSubmit: SubmitHandler<ILocalePermissionForm> = async form => {
    if (!isCepValid) {
      handleError('Pesquise os dados pelo CEP');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        data: {
          cep: form.cep,
          cityIBGECod: Number(form.cityIBGECod),
          cityName: form.cityName,
          stateName: form.stateName,
          stateIBGECod: Number(form.stateIBGECod),
          cityPermisson: !!form.cityPermisson,
          statePermission: !!form.statePermission,
          active: true,
        },
      };

      await api.post('/locale-permissions', payload);

      reset({
        cityIBGECod: '',
        cityName: '',
        stateIBGECod: '',
        stateName: '',
        cep: '',
        statePermission: false,
        cityPermisson: false,
      });
      setIsCepValid(false);
      handleSuccess('Local adicionado com sucesso!');
      onSuccess();
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onInvalidSubmit = () => {
    if (!isCepValid) {
      handleError('Pesquise o CEP antes de cadastrar o local');
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}>
      <Field>
        <Label>CEP:</Label>
        <Input
          as={MaskedInput}
          maskFunction={maskCEP}
          maxLength={9}
          placeholder="Insira o CEP"
          {...register('cep', {
            onChange: () => {
              if (isCepValid) {
                reset({
                  cityIBGECod: '',
                  cityName: '',
                  stateIBGECod: '',
                  stateName: '',
                  cityPermisson: false,
                  statePermission: false,
                });
                setIsCepValid(false);
              }
            },
          })}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSearchCep();
            }
          }}
        />
        {errors?.cep?.message && (
          <ErrorMessage>{errors.cep.message}</ErrorMessage>
        )}
      </Field>
      <FilledButton
        type="button"
        onClick={handleSearchCep}
        disabled={isVerifyingCep || isCepValid}
        style={{
          width: '32%',
          padding: '0 3rem',
        }}
      >
        {isVerifyingCep ? <Loading iconColor="#ffffff" /> : 'Pesquisar'}
      </FilledButton>
      <Field />
      <Field>
        <Label>Cidade:</Label>
        <Input {...register('cityName')} readOnly />
      </Field>
      <Field>
        <Label>Código da cidade:</Label>
        <Input {...register('cityIBGECod')} readOnly />
      </Field>
      <Field
        style={{
          alignItems: 'center',
        }}
      >
        <SelectLabel htmlFor="cityPermisson">
          Permitir toda a cidade
        </SelectLabel>
        <Controller
          control={control}
          name="cityPermisson"
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <ToggleLabel isActive={value}>
              <Toggle
                type="checkbox"
                checked={value}
                onChange={e => onChange(e.target.checked)}
              />
              {/* value ? 'Sim' : 'Não' */}
            </ToggleLabel>
          )}
        />
      </Field>
      <Field>
        <Label>Estado:</Label>
        <Input {...register('stateName')} readOnly />
      </Field>
      <Field>
        <Label>Código do estado:</Label>
        <Input {...register('stateIBGECod')} readOnly />
      </Field>
      <Field
        style={{
          alignItems: 'center',
        }}
      >
        <SelectLabel htmlFor="statePermission">
          Permitir todo o estado
        </SelectLabel>
        <Controller
          control={control}
          name="statePermission"
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <ToggleLabel isActive={value}>
              <Toggle
                type="checkbox"
                checked={value}
                onChange={e => onChange(e.target.checked)}
              />
              {/* value ? 'Sim' : 'Não' */}
            </ToggleLabel>
          )}
        />
      </Field>
      <FilledButton disabled={isSubmitting}>
        {isSubmitting ? <Loading iconColor="#fff" /> : 'Cadastrar'}
      </FilledButton>
    </Form>
  );
};

export default LocalePermissionForm;
