import { HiOutlineUsers } from 'react-icons/hi';
import { MdLockOutline, MdOutlineCake } from 'react-icons/md';
import { TbClipboardText } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { Container, Logo, MenuItem, MenuText } from './styles';

const NavBar = () => {
  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <MenuItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/users"
          style={({ isActive }) => ({
            color: isActive ? '#0054BC' : '#C6CEDD',
            textDecoration: 'none',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            paddingLeft: '1.125rem',
          })}
        >
          <HiOutlineUsers className="icon" style={{ fontSize: '1.5rem' }} />
          <MenuText>Usuários</MenuText>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/birthdays"
          style={({ isActive }) => ({
            color: isActive ? '#0054BC' : '#C6CEDD',
            textDecoration: 'none',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            paddingLeft: '1.125rem',
          })}
        >
          <MdOutlineCake className="icon" style={{ fontSize: '1.5rem' }} />
          <MenuText>Aniversariantes</MenuText>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/terms"
          style={({ isActive }) => ({
            color: isActive ? '#0054BC' : '#C6CEDD',
            textDecoration: 'none',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            paddingLeft: '1.125rem',
          })}
        >
          <TbClipboardText className="icon" style={{ fontSize: '1.5rem' }} />
          <MenuText>Termos de Uso</MenuText>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/edit-profile"
          style={({ isActive }) => ({
            color: isActive ? '#0054BC' : '#C6CEDD',
            textDecoration: 'none',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            paddingLeft: '1.125rem',
          })}
        >
          <MdLockOutline className="icon" style={{ fontSize: '1.5rem' }} />
          <MenuText>Redefinir Senha</MenuText>
        </NavLink>
      </MenuItem>
    </Container>
  );
};

export default NavBar;
