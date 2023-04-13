import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  return (
    <Container>
      <UserDivider>
        <UserRole>Administrador</UserRole>

        <UserName>Nome do Administrador</UserName>
      </UserDivider>

      <LogoutDivider onClick={() => navigate('/')}>
        <LogoutIcon />

        <LogoutText>Logout</LogoutText>
      </LogoutDivider>
    </Container>
  );
};

export default Header;
