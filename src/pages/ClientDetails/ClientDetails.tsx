import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import {
  BackDivider,
  BackIcon,
  BackTitle,
  Button,
  ColumnTitle,
  Container,
  Content,
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

const ClientDetails = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate(-1);
  };

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

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

              <Input type="text" id="name" name="name" value="André Barbosa" />

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
              />
            </FormColumn>

            <FormColumn>
              <ColumnTitle>&nbsp;</ColumnTitle>

              <Label htmlFor="facebook">Facebook</Label>

              <Input type="text" id="facebook" name="facebook" />

              <Label htmlFor="instagram">Instagram</Label>

              <Input type="text" id="instagram" name="instagram" />

              <Label htmlFor="youtube">Youtube</Label>

              <Input type="text" id="youtube" name="youtube" />

              <Label htmlFor="lucky_number">Número da Sorte</Label>

              <Input type="text" id="lucky_number" name="lucky_number" />
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
          <FormDivider>
            <Button>Salvar alterações</Button>
          </FormDivider>
        </MainForm>
      </Content>
    </Container>
  );
};

export default ClientDetails;
