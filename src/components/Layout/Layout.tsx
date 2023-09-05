import NavBar from '../NavBar/NavBar';
import { Container, Content } from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <NavBar />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
