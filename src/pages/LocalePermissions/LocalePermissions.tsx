import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FiTrash2 } from 'react-icons/fi';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import MaskedInput from '../../components/MaskedInput/MaskedInput';
import SmallPagination from '../../components/Pagination/Pagination';
import Select from '../../components/Select/Select';
import { ILocalePermission } from '../../interfaces/LocalePermission';
import { PaginatedResponse } from '../../interfaces/Paginated';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import { maskCEP } from '../../utils/mask';
import {
  ILocalePermissionForm,
  LocalePermissionSchema,
} from '../../validations/LocalePermissionSchema';
import {
  Checkbox,
  CheckboxLabel,
  Content,
  DataText,
  ErrorMessage,
  Field,
  FilledButton,
  FilterForm,
  IconButton,
  Input,
  Label,
  TableBody,
  TableData,
  TableHeaderData,
  TableHeaderRow,
  TableRow,
  Title,
} from './styles';

const allowOptions = [
  {
    label: 'Sim',
    value: true,
  },
  {
    label: 'Não',
    value: false,
  },
];

const LocalePermissions = () => {
  const [localePermissions, setLocalePermissions] = useState<
    ILocalePermission[]
  >([]);
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);

  const [isVerifyingCep, setIsVerifyingCep] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [idToDelete, setIdToDelete] = useState(0);
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

  useEffect(() => {
    getLocalePermissions();
  }, [page]);

  const getLocalePermissions = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<ILocalePermission>>(
        '/locale-permissions',
        {
          params: {
            sort: 'cityName:asc',
            'pagination[page]': page,
            'pagination[pageSize]': 100,
          },
        },
      );

      setLocalePermissions(data.data);
      setMaximumPage(data.meta.pagination.pageCount);
    } catch (error) {
      handleError(error);
    }
  };

  const handleConfirmDelete = async () => {
    if (!idToDelete) {
      return;
    }

    try {
      await api.delete(`/locale-permissions/${idToDelete}`);

      setIdToDelete(0);
      handleSuccess('Local excluído com sucesso!');
      getLocalePermissions();
    } catch (error) {
      handleError(error);
    }
  };

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
          cityPermisson: allowOptions[1],
          statePermission: allowOptions[1],
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
          cityPermisson: !!form.cityPermisson?.value,
          statePermission: !!form.statePermission?.value,
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
        statePermission: allowOptions[1],
        cityPermisson: allowOptions[1],
      });
      setIsCepValid(false);
      handleSuccess('Local adicionado com sucesso!');
      getLocalePermissions();
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
    <Layout>
      <Content>
        <Title>Locais permitidos</Title>
        <FilterForm onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}>
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
                      cityPermisson: allowOptions[1],
                      statePermission: allowOptions[1],
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
            <CheckboxLabel htmlFor="cityPermisson">
              Permitir toda a cidade
            </CheckboxLabel>
            <Controller
              control={control}
              name="cityPermisson"
              defaultValue={allowOptions[1]}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <Select
                    options={allowOptions}
                    onChange={onChange}
                    value={value}
                  />
                  {error?.message && (
                    <ErrorMessage
                      style={{
                        left: '55%',
                      }}
                    >
                      {error.message}
                    </ErrorMessage>
                  )}
                </>
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
            <CheckboxLabel htmlFor="statePermission">
              Permitir todo o estado
            </CheckboxLabel>
            <Controller
              control={control}
              name="statePermission"
              defaultValue={allowOptions[1]}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <Select
                    options={allowOptions}
                    onChange={onChange}
                    value={value}
                  />
                  {error?.message && (
                    <ErrorMessage
                      style={{
                        left: '55%',
                      }}
                    >
                      {error.message}
                    </ErrorMessage>
                  )}
                </>
              )}
            />
          </Field>
          <FilledButton disabled={isSubmitting}>
            {isSubmitting ? <Loading iconColor="#fff" /> : 'Cadastrar'}
          </FilledButton>
        </FilterForm>

        <TableHeaderRow>
          <TableHeaderData>CEP</TableHeaderData>
          <TableHeaderData>Cidade</TableHeaderData>
          <TableHeaderData>Código Cidade</TableHeaderData>
          <TableHeaderData>Permitir Cidade</TableHeaderData>
          <TableHeaderData>Estado</TableHeaderData>
          <TableHeaderData>Código Estado</TableHeaderData>
          <TableHeaderData>Permitir Estado</TableHeaderData>
          <TableHeaderData />
        </TableHeaderRow>

        <TableBody>
          {localePermissions.map(localePermission => (
            <TableRow key={localePermission.id}>
              <TableData>
                <DataText>{localePermission.attributes.cep}</DataText>
              </TableData>
              <TableData>
                <DataText>{localePermission.attributes.cityName}</DataText>
              </TableData>
              <TableData>
                <DataText>{localePermission.attributes.cityIBGECod}</DataText>
              </TableData>
              <TableData>
                <DataText>
                  <Checkbox
                    type="checkbox"
                    defaultChecked={localePermission.attributes.cityPermisson}
                    disabled
                  />
                </DataText>
              </TableData>
              <TableData>
                <DataText>{localePermission.attributes.stateName}</DataText>
              </TableData>
              <TableData>
                <DataText>{localePermission.attributes.stateIBGECod}</DataText>
              </TableData>
              <TableData>
                <DataText>
                  <Checkbox
                    type="checkbox"
                    defaultChecked={localePermission.attributes.statePermission}
                    disabled
                  />
                </DataText>
              </TableData>
              <TableData>
                <IconButton
                  type="button"
                  onClick={() => {
                    setIdToDelete(localePermission.id);
                  }}
                >
                  <FiTrash2 />
                </IconButton>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
        <SmallPagination
          currentPage={page}
          total={maximumPage}
          handleChange={(_, newPage) => setPage(newPage)}
        />
        {!!idToDelete && (
          <ConfirmModal
            message="Tem certeza que deseja excluir este local?"
            onClose={() => setIdToDelete(0)}
            onConfirm={handleConfirmDelete}
          />
        )}
      </Content>
    </Layout>
  );
};

export default LocalePermissions;
