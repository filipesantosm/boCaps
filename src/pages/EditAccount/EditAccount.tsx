import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import AccountSavedOrRegistered from '../../components/AccountSavedOrRegistered/AccountSavedOrRegistered';
import DeleteAccount from '../../components/DeleteAccount/DeleteAccount';
import DeleteAccountSuccess from '../../components/DeleteAccountSuccess/DeleteAccountSuccess';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { AccountSelect, Options } from '../../components/Selects/Selects';
import handleError from '../../services/handleToast';
import { NewAccountSchema } from '../../validations/NewAccountSchema';
import { DeleteIcon } from '../ManageFees/styles';
import {
  BackDivider,
  BackIcon,
  BackTitle,
  ButtonDivider,
  CancelButton,
  ColumnTitle,
  Container,
  Content,
  DeleteButton,
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

export interface EditAccountProps {
  type: Options;
  username: string;
  bank: Options;
  agency: string;
  account: number;
  digit: number;
  name: string;
  cpf: string;
}

const EditAccount = () => {
  const [savedModal, setSavedModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const navigate = useNavigate();

  const params = useParams();
  const id = params.id as string;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<EditAccountProps>({
    mode: 'onChange',
    resolver: yupResolver(NewAccountSchema),
  });

  const resetInformation = async () => {
    try {
      reset({
        type: { value: 'Corrente', label: 'Corrente' },
        username: 'Minha conta preferida',
        bank: { value: 'Nubank', label: 'Nubank' },
        agency: '0001',
        account: 1234567,
        digit: 0,
        name: 'Luíz de Souza Francisco',
        cpf: '018.548.667-95',
      });
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (id) {
      resetInformation();
    }
  }, [id]);

  const handleEditAccount: SubmitHandler<EditAccountProps> = async value => {
    try {
      setSavedModal(true);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm onSubmit={handleSubmit(handleEditAccount)}>
          <TitleDivider>
            <TitleIcon />

            <Title>Pagamento</Title>
          </TitleDivider>

          <BackDivider>
            <IconTag onClick={() => navigate('/payment')}>
              <BackIcon />
            </IconTag>

            <BackTitle>Editar conta cadastrada</BackTitle>
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
            <RegisterButton type="submit">Salvar e atualizar</RegisterButton>

            <CancelButton type="button" onClick={() => navigate('/payment')}>
              Cancelar
            </CancelButton>

            <DeleteButton type="button" onClick={() => setDeleteModal('id')}>
              <DeleteIcon />
              Excluir
            </DeleteButton>
          </ButtonDivider>
        </MainForm>
      </Content>
      {savedModal && (
        <AccountSavedOrRegistered isOpen={setSavedModal} text="atualizada" />
      )}

      {deleteModal !== '' && (
        <DeleteAccount
          id={deleteModal}
          isOpen={setDeleteModal}
          isOtherOpen={setDeleteSuccess}
        />
      )}

      {deleteSuccess && <DeleteAccountSuccess isOpen={setDeleteSuccess} />}
    </Container>
  );
};

export default EditAccount;
