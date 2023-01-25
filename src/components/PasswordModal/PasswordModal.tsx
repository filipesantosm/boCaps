import { Container, Content, Description, SuccessIcon, Title } from './styles';
import success from '../../assets/img/success.svg';

interface PasswordModalProps {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordModal = ({ isOpen }: PasswordModalProps) => {
  return (
    <Container onClick={() => isOpen(false)}>
      <Content>
        <SuccessIcon src={success} alt="Ícone de sucesso" />

        <Title>Sucesso!</Title>

        <Description>A nova senha foi enviada.</Description>
        <Description>Siga o passo a passo enviado em seu e-mail.</Description>
      </Content>
    </Container>
  );
};

export default PasswordModal;
