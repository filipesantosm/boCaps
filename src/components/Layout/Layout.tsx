import NewHeader from '../NewHeader/NewHeader';
import NewNavBar from '../NewNavBar/NewNavBar';
import { Container, Content } from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <NewNavBar />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
