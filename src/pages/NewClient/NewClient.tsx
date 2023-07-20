import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import UserPlaceholder from '../../assets/img/user-placeholder.png';
import Layout from '../../components/Layout/Layout';
import { AccountSelect } from '../../components/Selects/Selects';
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
  Title,
  TitleDivider,
} from './styles';

const NewClient = () => {
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
          <Title>Cadastrar usuário</Title>
        </TitleDivider>

        <BackDivider>
          <IconTag onClick={() => navigate('/users')}>
            <BackIcon />
          </IconTag>

          <BackTitle>Voltar</BackTitle>
        </BackDivider>

        <FormDivider>
          <FormColumn
            style={{
              marginBottom: '2rem',
            }}
          >
            <ColumnTitle>Usuário</ColumnTitle>

            <Label htmlFor="name">Nome</Label>

            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Insira o nome"
            />

            <Label htmlFor="phone">Telefone</Label>

            <Input
              type="text"
              id="phone"
              name="phone"
              placeholder="Insira o telefone"
            />

            <Label htmlFor="email">E-mail</Label>

            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Insira o e-mail"
            />

            <Label htmlFor="born_date">Data de Nascimento</Label>

            <Input
              type="text"
              id="born_date"
              name="born_date"
              placeholder="Insira a data de nascimento"
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

            <Input type="text" id="cpf" name="cpf" />

            <Label htmlFor="facebook">Facebook</Label>

            <Input type="text" id="facebook" name="facebook" />

            <Label htmlFor="instagram">Instagram</Label>

            <Input type="text" id="instagram" name="instagram" />

            <Label htmlFor="youtube">Youtube</Label>

            <Input type="text" id="youtube" name="youtube" />

            <Label htmlFor="lucky_number">Número da Sorte</Label>

            <Input type="text" id="lucky_number" name="lucky_number" />
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
                  style={{ marginBottom: '0' }}
                  placeholder="Insira o CEP"
                />
              </RowColumn>
              <RowColumn>
                <Label htmlFor="street">Rua</Label>
                <Input
                  type="text"
                  id="street"
                  name="street"
                  style={{ marginBottom: '0' }}
                  placeholder="Insira a rua"
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
                  style={{ marginBottom: '0' }}
                  placeholder="Insira o número"
                />
              </RowColumn>
              <RowColumn>
                <Label htmlFor="neighborhood">Bairro</Label>
                <Input
                  type="text"
                  id="neighborhood"
                  name="neighborhood"
                  style={{ marginBottom: '0' }}
                  placeholder="Insira o bairro"
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
                />
              </RowColumn>
              <RowColumn>
                <Label htmlFor="state">Estado</Label>
                <Input
                  type="text"
                  id="state"
                  name="state"
                  style={{ marginBottom: '0' }}
                  placeholder="Insira o estado"
                />
              </RowColumn>
              <RowColumn>
                <Label htmlFor="city">Cidade</Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  style={{ marginBottom: '0' }}
                  placeholder="Insira a cidade"
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
          <Button>Cadastrar</Button>
        </FormDivider>
      </MainForm>
    </Layout>
  );
};

export default NewClient;
