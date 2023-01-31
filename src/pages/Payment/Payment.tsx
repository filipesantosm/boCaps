import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import {
  Container,
  Content,
  MainForm,
  Title,
  TitleDivider,
  TitleIcon,
} from './styles';

const Payment = () => {
  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm>
          <TitleDivider>
            <TitleIcon />

            <Title>Pagamento</Title>
          </TitleDivider>
        </MainForm>
      </Content>
    </Container>
  );
};

export default Payment;
