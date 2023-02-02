import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import {
  BackDivider,
  BackIcon,
  BackTitle,
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

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm>
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
                readOnly
              />

              <Label htmlFor="email">E-mail</Label>

              <Input
                type="text"
                id="email"
                name="email"
                value="andre.barbosa@gmail.com"
                readOnly
              />

              <Label htmlFor="born_date">Nome Fantasia</Label>

              <Input
                type="text"
                id="born_date"
                name="born_date"
                value="12/08/1992"
                readOnly
              />
            </FormColumn>

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
                    readOnly
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
                    readOnly
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
                    readOnly
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
                    readOnly
                    style={{ marginBottom: '0' }}
                  />
                </RowColumn>
              </FormRow>

              <FormRow>
                <RowColumn>
                  <Label htmlFor="state">Estado</Label>

                  <Input
                    type="text"
                    id="state"
                    name="state"
                    value="MG"
                    readOnly
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
                    readOnly
                    style={{ marginBottom: '0' }}
                  />
                </RowColumn>
              </FormRow>
            </FormColumn>
          </FormDivider>
        </MainForm>
      </Content>
    </Container>
  );
};

export default ClientDetails;
