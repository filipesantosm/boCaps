import { useAuth } from '../../hooks/useAuth';
import {
  Container,
  LogoutDivider,
  LogoutIcon,
  LogoutText,
  UserDivider,
  UserName,
  UserRole,
} from './styles';

const Header = () => {
  const { logout, user } = useAuth();

  return (
    <Container>
      <UserDivider>
        <UserRole>Administrador</UserRole>

        <UserName>Nome do Administrador</UserName>
      </UserDivider>

      <LogoutDivider onClick={() => logout()}>
        <LogoutIcon />

        <LogoutText>Sair</LogoutText>
      </LogoutDivider>
    </Container>
  );
};

export default Header;
