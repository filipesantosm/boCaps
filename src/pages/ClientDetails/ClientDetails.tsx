import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import Layout from '../../components/Layout/Layout';
import MaskedInput from '../../components/MaskedInput/MaskedInput';
import { AccountSelect } from '../../components/Selects/Selects';
import { IUser, IUserForm } from '../../interfaces/User';
import api from '../../services/api';
import handleError from '../../services/handleToast';
import { maskCPF, maskPhone } from '../../utils/mask';
import {
  BackDivider,
  BackIcon,
  BackTitle,
  Button,
  ColumnTitle,
  ErrorMessage,
  Field,
  FormColumn,
  FormDivider,
  FormRow,
  IconTag,
  Input,
  Label,
  MainForm,
  RowColumn,
  Subtitle,
  Title,
  TitleDivider,
  TitleIcon,
} from './styles';
import { ClientSchema } from '../../validations/ClientSchema';

const blockedOptions = [
  { value: 'true', label: 'Sim' },
  { value: 'false', label: 'Não' },
];

const ClientDetails = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const {
    control,
    handleSubmit,
    reset,
    register,
    getValues,
    formState: { errors },
    watch,
    setValue,
    trigger,
  } = useForm<IUserForm>({
    resolver: yupResolver(ClientSchema),
  });
  const [user, setUser] = useState<IUser>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (userId) {
      getUser();
    }
  }, [userId]);

  const getUser = async () => {
    try {
      const { data } = await api.get<IUser>(`/users/${userId}`);

      reset({
        cep: data.cep || undefined,
        city: data.city || undefined,
        country: data.country || undefined,
        cpf: data.cpf || undefined,
        dateBirth: data.dateBirth || undefined,
        email: data.email || undefined,
        facebook: data.facebook || undefined,
        instagram: data.instagran || undefined,
        luckyNumber: data.luckyNumber || undefined,
        name: data.name || undefined,
        neighborhood: data.neighborhood || undefined,
        phone: data.phone || undefined,
        sexo: data.sexo || undefined,
        state: data.state || undefined,
        street: data.street || undefined,
        youtube: data.youtube || undefined,
        number: data.number || undefined,
        blocked: data.blocked ? blockedOptions[1] : blockedOptions[0],
      });
      setUser(data);
    } catch (error) {
      handleError(error);
    }
  };

  const onSubmit: SubmitHandler<IUserForm> = async form => {
    if (!userId && !form.password) {
      handleError('Insira a senha do usuário');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        id: userId || undefined,
        username: userId ? undefined : form.cpf,
        email: userId ? undefined : form.email,
        blocked: userId ? form.blocked.value === 'false' : undefined,
        phone: form.phone,
        cpf: form.cpf,
        street: form.street,
        cep: form.cep,
        number: form.number,
        city: form.city,
        state: form.state,
        neighborhood: form.neighborhood,
        dateBirth: form.dateBirth,
        password: form.password,
        name: form.name,
      };

      if (!userId) {
        await api.post('/auth/local/register', payload);
      } else {
        await api.put(`/users/${userId}`, payload);
      }

      reset();
      navigate(-1);
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCepBlur = async () => {
    const cepFieldValid = await trigger('cep');

    if (!cepFieldValid) {
      return;
    }

    const cep = getValues('cep');

    try {
      const cepFormatted = cep.replace('-', '');
      if (cepFormatted.length >= 8) {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cepFormatted}/json/`,
        );

        if (data.erro) {
          handleError('CEP não encontrado');
          return;
        }

        setValue('state', data.uf, {
          shouldValidate: true,
        });
        setValue('city', data.localidade, {
          shouldValidate: true,
        });
        setValue('street', data.logradouro, {
          shouldValidate: true,
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  const confirmPassword = watch('passwordConfirmation');

  return (
    <Layout>
      <MainForm onSubmit={handleSubmit(onSubmit)}>
        <TitleDivider>
          <TitleIcon />

          <Title>Usuários</Title>

          <Subtitle>Cliente</Subtitle>
        </TitleDivider>

        <BackDivider>
          <IconTag onClick={() => navigate('/users')}>
            <BackIcon />
          </IconTag>

          <BackTitle>{user?.name || 'Voltar'}</BackTitle>
        </BackDivider>

        <FormDivider>
          <FormColumn>
            <ColumnTitle>Usuário</ColumnTitle>

            <Field>
              <Label htmlFor="name">Nome</Label>
              <Input
                type="text"
                id="name"
                // disabled={!!userId}
                placeholder="Insira o nome"
                {...register('name')}
              />
              {errors?.name?.message && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                type="text"
                id="phone"
                as={MaskedInput}
                maskFunction={maskPhone}
                maxLength={14}
                placeholder="Insira o telefone"
                {...register('phone')}
              />
              {errors?.phone?.message && (
                <ErrorMessage>{errors.phone.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                placeholder="Insira o e-mail"
                {...register('email')}
              />
              {errors?.email?.message && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label htmlFor="dateBirth">Data de Nascimento</Label>
              <Input
                type="date"
                id="dateBirth"
                disabled={!!userId}
                {...register('dateBirth')}
              />
              {errors?.dateBirth?.message && (
                <ErrorMessage>{errors.dateBirth.message}</ErrorMessage>
              )}
            </Field>
          </FormColumn>

          <FormColumn>
            <ColumnTitle>&nbsp;</ColumnTitle>

            {userId && (
              <Field
                style={{
                  marginBottom: '1.25rem',
                }}
              >
                <Label>Ativo</Label>
                <AccountSelect
                  options={blockedOptions}
                  placeholder="Selecione"
                  id="blocked"
                  name="blocked"
                  control={control}
                />
              </Field>
            )}

            <Field>
              <Label htmlFor="cpf">CPF</Label>
              <Input
                type="text"
                id="cpf"
                as={MaskedInput}
                maskFunction={maskCPF}
                maxLength={14}
                placeholder="Insira o CPF"
                disabled={!!userId}
                {...register('cpf')}
              />
              {errors?.cpf?.message && (
                <ErrorMessage>{errors.cpf.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label htmlFor="lucky_number">Número da Sorte</Label>
              <Input
                type="text"
                id="lucky_number"
                placeholder="Insira o número da sorte"
                {...register('luckyNumber')}
                disabled={!!userId}
              />
              {errors?.luckyNumber?.message && (
                <ErrorMessage>{errors.luckyNumber.message}</ErrorMessage>
              )}
            </Field>
          </FormColumn>
          <FormColumn />
        </FormDivider>
        <FormDivider>
          <FormColumn>
            <ColumnTitle>Endereço</ColumnTitle>

            <FormRow>
              <RowColumn>
                <Field>
                  <Label htmlFor="cep">CEP</Label>
                  <Input
                    type="text"
                    id="cep"
                    placeholder="Insira o CEP"
                    {...register('cep', {
                      onBlur: () => {
                        handleCepBlur();
                      },
                    })}
                  />
                  {errors?.cep?.message && (
                    <ErrorMessage>{errors.cep.message}</ErrorMessage>
                  )}
                </Field>
              </RowColumn>

              <RowColumn>
                <Field>
                  <Label htmlFor="street">Rua</Label>
                  <Input
                    type="text"
                    id="street"
                    placeholder="Insira a rua"
                    {...register('street')}
                  />
                  {errors?.street?.message && (
                    <ErrorMessage>{errors.street.message}</ErrorMessage>
                  )}
                </Field>
              </RowColumn>
            </FormRow>

            <FormRow>
              <RowColumn>
                <Field>
                  <Label htmlFor="number">Número</Label>
                  <Input
                    type="text"
                    id="number"
                    placeholder="Insira o número"
                    {...register('number')}
                  />
                  {errors?.number?.message && (
                    <ErrorMessage>{errors.number.message}</ErrorMessage>
                  )}
                </Field>
              </RowColumn>

              <RowColumn>
                <Field>
                  <Label htmlFor="neighborhood">Bairro</Label>
                  <Input
                    type="text"
                    id="neighborhood"
                    placeholder="Insira o bairro"
                    {...register('neighborhood')}
                  />
                  {errors?.neighborhood?.message && (
                    <ErrorMessage>{errors.neighborhood.message}</ErrorMessage>
                  )}
                </Field>
              </RowColumn>
            </FormRow>

            <FormRow
              style={{
                gridTemplateColumns: '1fr 0.9fr 1fr',
              }}
            >
              <RowColumn>
                <Field>
                  <Label htmlFor="state">Estado</Label>
                  <Input
                    type="text"
                    id="state"
                    placeholder="Insira o estado"
                    {...register('state')}
                  />
                  {errors?.state?.message && (
                    <ErrorMessage>{errors.state.message}</ErrorMessage>
                  )}
                </Field>
              </RowColumn>

              <RowColumn>
                <Field>
                  <Label htmlFor="city">Cidade</Label>
                  <Input
                    type="text"
                    id="city"
                    placeholder="Insira a cidade"
                    {...register('city')}
                  />
                  {errors?.city?.message && (
                    <ErrorMessage>{errors.city.message}</ErrorMessage>
                  )}
                </Field>
              </RowColumn>
            </FormRow>
          </FormColumn>
        </FormDivider>
        {!userId && (
          <FormDivider>
            <FormColumn>
              <ColumnTitle>Senha</ColumnTitle>

              <FormRow
                style={{
                  gridTemplateColumns: '1fr 0.9fr 1fr',
                }}
              >
                <RowColumn>
                  <Field>
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="*******"
                      {...register('password', {
                        onChange: () => {
                          if (confirmPassword) {
                            trigger('passwordConfirmation');
                          }
                        },
                      })}
                    />
                    {errors?.password?.message && (
                      <ErrorMessage>{errors.password.message}</ErrorMessage>
                    )}
                  </Field>
                </RowColumn>

                <RowColumn>
                  <Field>
                    <Label htmlFor="street">Confirmar senha</Label>
                    <Input
                      type="password"
                      id="passwordConfirmation"
                      placeholder="*******"
                      {...register('passwordConfirmation')}
                    />
                    {errors?.passwordConfirmation?.message && (
                      <ErrorMessage>
                        {errors.passwordConfirmation.message}
                      </ErrorMessage>
                    )}
                  </Field>
                </RowColumn>
              </FormRow>
            </FormColumn>
          </FormDivider>
        )}
        <FormDivider
          style={{
            marginTop: '2rem',
          }}
        >
          <Button disabled={isSubmitting}>
            {userId ? 'Salvar alterações' : 'Cadastrar usuário'}
          </Button>
        </FormDivider>
      </MainForm>
    </Layout>
  );
};

export default ClientDetails;
