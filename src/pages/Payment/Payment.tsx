import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { Container, Content, MainForm } from './styles';

const Payment = () => {
  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm />
      </Content>
    </Container>
  );
};

export default Payment;
