import { useRef, useState } from 'react';
import { BsList } from 'react-icons/bs';
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import { FiLogOut } from 'react-icons/fi';
import { HiOutlineGift, HiOutlineHome, HiOutlineUsers } from 'react-icons/hi';
import {
  MdLockOutline,
  MdOutlineCake,
  MdOutlineDiscount,
} from 'react-icons/md';
import { TbClipboardText } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useOutside } from '../../hooks/useOutside';
import {
  Container,
  HamburgerButton,
  LinksList,
  MenuItem,
  MenuText,
  StyledNavLink,
} from './styles';

const NewNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useOutside(containerRef, () => setIsOpen(false));

  return (
    <Container isOpen={isOpen} ref={containerRef}>
      {/* <Logo src={logo} alt="Logo" /> */}

      <HamburgerButton type="button" onClick={() => setIsOpen(prev => !prev)}>
        <BsList style={{ fontSize: '1.5rem' }} />
      </HamburgerButton>

      <LinksList>
        <MenuItem>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome className="icon" style={{ fontSize: '1.5rem' }} />
            <MenuText>Home</MenuText>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/sweepstake">
            <HiOutlineGift className="icon" style={{ fontSize: '1.5rem' }} />
            <MenuText>Sorteios</MenuText>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/draw-promos">
            <MdOutlineDiscount
              className="icon"
              style={{ fontSize: '1.5rem' }}
            />
            <MenuText>Promoções</MenuText>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/billets">
            <LiaFileInvoiceDollarSolid
              className="icon"
              style={{ fontSize: '1.5rem' }}
            />
            <MenuText>Boletos</MenuText>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/users">
            <HiOutlineUsers className="icon" style={{ fontSize: '1.5rem' }} />
            <MenuText>Usuários</MenuText>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/birthdays">
            <MdOutlineCake className="icon" style={{ fontSize: '1.5rem' }} />
            <MenuText>Aniversariantes</MenuText>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/terms">
            <TbClipboardText className="icon" style={{ fontSize: '1.5rem' }} />
            <MenuText>Termos de Uso</MenuText>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/edit-profile">
            <MdLockOutline className="icon" style={{ fontSize: '1.5rem' }} />
            <MenuText>Redefinir Senha</MenuText>
          </StyledNavLink>
        </MenuItem>
      </LinksList>

      <HamburgerButton
        type="button"
        onClick={() => {
          logout();
          navigate('/');
        }}
      >
        <FiLogOut style={{ fontSize: '1.5rem' }} />
        <MenuText>Logout</MenuText>
      </HamburgerButton>
    </Container>
  );
};

export default NewNavBar;
