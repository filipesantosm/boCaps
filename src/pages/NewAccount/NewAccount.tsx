import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AccountSavedOrRegistered from '../../components/AccountSavedOrRegistered/AccountSavedOrRegistered';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { AccountSelect, Options } from '../../components/Selects/Selects';
import handleError from '../../services/handleToast';
import { NewAccountSchema } from '../../validations/NewAccountSchema';
import {
  BackDivider,
  BackIcon,
  BackTitle,
  ButtonDivider,
  ColumnTitle,
  Container,
  Content,
  EspecialColumn,
  EspecialDivider,
  FormColumn,
  FormDivider,
  IconTag,
  Input,
  Label,
  MainForm,
  RegisterButton,
  Title,
  TitleDivider,
  TitleIcon,
} from './styles';

interface NewAccountProps {
  type: Options;
  username: string;
  bank: Options;
  agency: number;
  account: number;
  digit: number;
  name: string;
  cpf: string;
}

const NewAccount = () => {
  const [registeredModal, setRegisteredModal] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<NewAccountProps>({
    mode: 'onChange',
    resolver: yupResolver(NewAccountSchema),
  });

  const handleNewAccount: SubmitHandler<NewAccountProps> = async value => {
    try {
      setRegisteredModal(true);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm onSubmit={handleSubmit(handleNewAccount)}>
          <TitleDivider>
            <TitleIcon />

            <Title>Pagamento</Title>
          </TitleDivider>

          <BackDivider>
            <IconTag onClick={() => navigate('/payment')}>
              <BackIcon />
            </IconTag>

            <BackTitle>Cadastrar nova conta bancária</BackTitle>
          </BackDivider>

          <FormDivider>
            <FormColumn>
              <ColumnTitle>Conta bancária</ColumnTitle>

              <Label htmlFor="type">Tipo de conta</Label>

              <AccountSelect
                hasError={!!errors.type}
                id="type"
                {...register('type')}
                control={control}
                placeholder="Selecione tipo de conta"
                options={[
                  {
                    value: 'Corrente',
                    label: 'Corrente',
                  },
                  {
                    value: 'Poupança',
                    label: 'Poupança',
                  },
                ]}
              />

              <Label htmlFor="username" style={{ marginTop: '1.25rem' }}>
                Apelido da conta
              </Label>

              <Input
                hasError={!!errors.username}
                type="text"
                id="username"
                {...register('username')}
                placeholder="Ex.: Minha conta favorita"
              />

              <Label htmlFor="bank">Selecione o banco</Label>

              <AccountSelect
                hasError={!!errors.bank}
                id="bank"
                {...register('bank')}
                control={control}
                placeholder="Selecione o banco"
                options={[
                  {
                    value: 'Nubank',
                    label: 'Nubank',
                  },
                ]}
              />

              <EspecialDivider style={{ marginTop: '1.25rem' }}>
                <EspecialColumn>
                  <Label htmlFor="agency" style={{ marginBottom: '0' }}>
                    Agência
                  </Label>

                  <Input
                    hasError={!!errors.agency}
                    type="text"
                    id="agency"
                    {...register('agency')}
                    placeholder="Ex.: 0001"
                  />
                </EspecialColumn>

                <EspecialColumn>
                  <Label htmlFor="account" style={{ marginBottom: '0' }}>
                    Conta
                  </Label>

                  <Input
                    hasError={!!errors.account}
                    type="text"
                    id="account"
                    {...register('account')}
                    placeholder="Ex.: 1234567"
                  />
                </EspecialColumn>

                <EspecialColumn>
                  <Label htmlFor="digit" style={{ marginBottom: '0' }}>
                    Conta
                  </Label>

                  <Input
                    hasError={!!errors.digit}
                    type="text"
                    id="digit"
                    {...register('digit')}
                    placeholder="Ex.: 1"
                  />
                </EspecialColumn>
              </EspecialDivider>
            </FormColumn>

            <FormColumn>
              <ColumnTitle>Titular</ColumnTitle>

              <Label htmlFor="name">Nome completo</Label>

              <Input
                hasError={!!errors.name}
                type="text"
                id="name"
                {...register('name')}
                placeholder="Digite nome completo do titular"
              />

              <Label htmlFor="cpf">CPF do titular</Label>

              <Input
                hasError={!!errors.cpf}
                type="text"
                id="cpf"
                {...register('cpf')}
                placeholder="Ex.: 018.548.667-95"
              />
            </FormColumn>
          </FormDivider>

          <ButtonDivider>
            <RegisterButton type="submit">
              Cadastrar conta bancária
            </RegisterButton>
          </ButtonDivider>
        </MainForm>
      </Content>

      {registeredModal && (
        <AccountSavedOrRegistered
          isOpen={setRegisteredModal}
          text="cadastrada"
        />
      )}
    </Container>
  );
};

export default NewAccount;
