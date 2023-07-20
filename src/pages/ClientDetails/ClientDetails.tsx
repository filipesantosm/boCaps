import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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

const ClientDetails = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File>();
  const { control } = useForm();

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

          <BackTitle>André Barbosa</BackTitle>
        </BackDivider>

        <FormDivider>
          <FormColumn>
            <ColumnTitle>Usuário</ColumnTitle>

            <Label htmlFor="name">Nome</Label>

            <Input
              type="text"
              id="name"
              name="name"
              value="André Barbosa"
              readOnly
            />

            <Label htmlFor="phone">Telefone</Label>

            <Input
              type="text"
              id="phone"
              name="phone"
              value="(32) 9 1234-5678"
            />

            <Label htmlFor="email">E-mail</Label>

            <Input
              type="text"
              id="email"
              name="email"
              value="andre.barbosa@gmail.com"
            />

            <Label htmlFor="born_date">Data de Nascimento</Label>

            <Input
              type="text"
              id="born_date"
              name="born_date"
              value="12/08/1992"
              readOnly
            />

            <Label>Sexo</Label>

            <AccountSelect
              options={[
                { value: 'M', label: 'Masculino' },
                { value: 'F', label: 'Feminino' },
              ]}
              placeholder="Selecione"
              id="sex"
              name="sex"
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
              defaultValue="123.456.789-11"
              readOnly
            />

            <Label htmlFor="facebook">Facebook</Label>

            <Input type="text" id="facebook" name="facebook" />

            <Label htmlFor="instagram">Instagram</Label>

            <Input type="text" id="instagram" name="instagram" />

            <Label htmlFor="youtube">Youtube</Label>

            <Input type="text" id="youtube" name="youtube" />

            <Label htmlFor="lucky_number">Número da Sorte</Label>

            <Input
              type="text"
              id="lucky_number"
              name="lucky_number"
              defaultValue="20"
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
              defaultValue={{ value: 'S', label: 'S' }}
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
                  name="cep"
                  value="331630-430"
                  style={{ marginBottom: '0' }}
                />
              </RowColumn>

              <RowColumn>
                <Label htmlFor="street">Rua</Label>

                <Input
                  type="text"
                  id="street"
                  name="street"
                  value="Santa Amélia"
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
                  name="number"
                  value="1304"
                  style={{ marginBottom: '0' }}
                />
              </RowColumn>

              <RowColumn>
                <Label htmlFor="neighborhood">Bairro</Label>

                <Input
                  type="text"
                  id="neighborhood"
                  name="neighborhood"
                  value="Horta"
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
                  name="country"
                  style={{ marginBottom: '0' }}
                  placeholder="Insira o país"
                  defaultValue="Brasil"
                />
              </RowColumn>
              <RowColumn>
                <Label htmlFor="state">Estado</Label>

                <Input
                  type="text"
                  id="state"
                  name="state"
                  value="MG"
                  style={{ marginBottom: '0' }}
                />
              </RowColumn>

              <RowColumn>
                <Label htmlFor="city">Cidade</Label>

                <Input
                  type="text"
                  id="city"
                  name="city"
                  value="Leopoldina"
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
