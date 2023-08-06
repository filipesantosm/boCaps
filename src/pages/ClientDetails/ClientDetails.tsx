import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import UserPlaceholder from '../../assets/img/user-placeholder.png';
import Layout from '../../components/Layout/Layout';
import {
  AvatarContainer,
  AvatarInput,
  AvatarLabel,
  AvatarPreview,
  BackDivider,
  BackIcon,
  BackTitle,
  Button,
  ColumnTitle,
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
import { AccountSelect } from '../../components/Selects/Selects';
import { IUser, IUserForm } from '../../interfaces/User';
import handleError from '../../services/handleToast';
import api from '../../services/api';

const ClientDetails = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [file, setFile] = useState<File>();
  const { control, reset, register } = useForm<IUserForm>();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    getUser();
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
      });
      setUser(data);
    } catch (error) {
      handleError(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate(-1);
  };

  const userImage = file ? URL.createObjectURL(file) : UserPlaceholder;

  return (
    <Layout>
      <MainForm onSubmit={handleSubmit}>
        <TitleDivider>
          <TitleIcon />

          <Title>Usuários</Title>

          <Subtitle>Cliente</Subtitle>
        </TitleDivider>

        <BackDivider>
          <IconTag onClick={() => navigate('/users')}>
            <BackIcon />
          </IconTag>

          <BackTitle>{user?.name}</BackTitle>
        </BackDivider>

        <FormDivider>
          <FormColumn>
            <ColumnTitle>Usuário</ColumnTitle>

            <Label htmlFor="name">Nome</Label>

            <Input
              type="text"
              id="name"
              name="name"
              value={user?.name || ''}
              readOnly
            />

            <Label htmlFor="phone">Telefone</Label>

            <Input type="text" id="phone" {...register('phone')} />

            <Label htmlFor="email">E-mail</Label>

            <Input type="text" id="email" {...register('cpf')} />

            <Label htmlFor="born_date">Data de Nascimento</Label>

            <Input
              type="date"
              id="born_date"
              name="born_date"
              value={user?.dateBirth || ''}
              readOnly
            />

            <Label>Sexo</Label>

            <AccountSelect
              options={[
                { value: 'M', label: 'Masculino' },
                { value: 'F', label: 'Feminino' },
              ]}
              placeholder="Selecione"
              id="sexo"
              name="sexo"
              control={control}
            />
          </FormColumn>

          <FormColumn>
            <ColumnTitle>&nbsp;</ColumnTitle>

            <Label htmlFor="cpf">CPF</Label>

            <Input
              type="text"
              id="cpf"
              name="cpf"
              value={user?.cpf || ''}
              readOnly
            />

            <Label htmlFor="facebook">Facebook</Label>

            <Input type="text" id="facebook" {...register('facebook')} />

            <Label htmlFor="instagram">Instagram</Label>

            <Input type="text" id="instagram" {...register('instagram')} />

            <Label htmlFor="youtube">Youtube</Label>

            <Input type="text" id="youtube" {...register('youtube')} />

            <Label htmlFor="lucky_number">Número da Sorte</Label>

            <Input
              type="text"
              id="lucky_number"
              {...register('luckyNumber')}
              readOnly
            />
          </FormColumn>
          <FormColumn>
            <ColumnTitle>&nbsp;</ColumnTitle>
            <AvatarContainer>
              <Label>Foto do usuário</Label>
              <AvatarLabel>
                <AvatarInput
                  type="file"
                  onChange={e => {
                    if (e.target.files?.[0]) {
                      setFile(e.target.files[0]);
                    }
                  }}
                  accept="image/*"
                />
                <AvatarPreview src={userImage} />
              </AvatarLabel>
            </AvatarContainer>

            <Label
              style={{
                marginTop: '1.5rem',
              }}
            >
              Ativo
            </Label>

            <AccountSelect
              options={[
                { value: 'S', label: 'S' },
                { value: 'N', label: 'N' },
              ]}
              placeholder="Selecione"
              id="sex"
              name="sex"
              control={control}
            />
          </FormColumn>
        </FormDivider>
        <FormDivider>
          <FormColumn>
            <ColumnTitle>Endereço</ColumnTitle>

            <FormRow>
              <RowColumn>
                <Label htmlFor="cep">CEP</Label>

                <Input
                  type="text"
                  id="cep"
                  {...register('cep')}
                  style={{ marginBottom: '0' }}
                />
              </RowColumn>

              <RowColumn>
                <Label htmlFor="street">Rua</Label>

                <Input
                  type="text"
                  id="street"
                  {...register('street')}
                  style={{ marginBottom: '0' }}
                />
              </RowColumn>
            </FormRow>

            <FormRow>
              <RowColumn>
                <Label htmlFor="number">Número</Label>

                <Input
                  type="text"
                  id="number"
                  {...register('number')}
                  style={{ marginBottom: '0' }}
                />
              </RowColumn>

              <RowColumn>
                <Label htmlFor="neighborhood">Bairro</Label>

                <Input
                  type="text"
                  id="neighborhood"
                  {...register('neighborhood')}
                  style={{ marginBottom: '0' }}
                />
              </RowColumn>
            </FormRow>

            <FormRow
              style={{
                gridTemplateColumns: '1fr 0.9fr 1fr',
              }}
            >
              <RowColumn>
                <Label htmlFor="country">País</Label>
                <Input
                  type="text"
                  id="country"
                  {...register('country')}
                  style={{ marginBottom: '0' }}
                  placeholder="Insira o país"
                />
              </RowColumn>
              <RowColumn>
                <Label htmlFor="state">Estado</Label>

                <Input
                  type="text"
                  id="state"
                  {...register('state')}
                  style={{ marginBottom: '0' }}
                />
              </RowColumn>

              <RowColumn>
                <Label htmlFor="city">Cidade</Label>

                <Input
                  type="text"
                  id="city"
                  {...register('city')}
                  style={{ marginBottom: '0' }}
                />
              </RowColumn>
            </FormRow>
          </FormColumn>
        </FormDivider>
        <FormDivider
          style={{
            marginTop: '2rem',
          }}
        >
          <Button>Salvar alterações</Button>
        </FormDivider>
      </MainForm>
    </Layout>
  );
};

export default ClientDetails;
