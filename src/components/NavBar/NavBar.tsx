import { NavLink } from 'react-router-dom';
import { HiOutlineTicket, HiOutlineUsers } from 'react-icons/hi';
import { TbClipboardText, TbDiscount2 } from 'react-icons/tb';
import { FaBalanceScaleLeft } from 'react-icons/fa';
import { BiWalletAlt } from 'react-icons/bi';
import { MdLockOutline } from 'react-icons/md';
import logo from '../../assets/img/logo.svg';
import { Container, Logo, MenuItem, MenuText } from './styles';

const NavBar = () => {
  return (
    <Container>
      <Logo src={logo} alt="Logo" />

      <MenuItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? '#007126' : '#C6CEDD',
            textDecoration: 'none',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            paddingLeft: '1.125rem',
          })}
        >
          <HiOutlineTicket className="icon" style={{ fontSize: '1.75rem' }} />
          <MenuText>Green-Fees</MenuText>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/sales"
          style={({ isActive }) => ({
            color: isActive ? '#007126' : '#C6CEDD',
            textDecoration: 'none',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            paddingLeft: '1.125rem',
          })}
        >
          <TbDiscount2 className="icon" style={{ fontSize: '1.75rem' }} />
          <MenuText>Promoções</MenuText>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/tax"
          style={({ isActive }) => ({
            color: isActive ? '#007126' : '#C6CEDD',
            textDecoration: 'none',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            paddingLeft: '1.125rem',
          })}
        >
          <FaBalanceScaleLeft className="icon" style={{ fontSize: '1.5rem' }} />
          <MenuText>Taxas</MenuText>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/users"
          style={({ isActive }) => ({
            color: isActive ? '#007126' : '#C6CEDD',
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
          to="/payment"
          style={({ isActive }) => ({
            color: isActive ? '#007126' : '#C6CEDD',
            textDecoration: 'none',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            paddingLeft: '1.125rem',
          })}
        >
          <BiWalletAlt className="icon" style={{ fontSize: '1.5rem' }} />
          <MenuText>Pagamento</MenuText>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/terms"
          style={({ isActive }) => ({
            color: isActive ? '#007126' : '#C6CEDD',
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
            color: isActive ? '#007126' : '#C6CEDD',
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
