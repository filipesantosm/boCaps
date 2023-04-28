import {
  CloseIcon,
  Container,
  Content,
  Description,
  SuccessIcon,
  Title,
} from './styles';
import success from '../../assets/img/success.svg';

interface ModalProps {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: 'atualizada' | 'cadastrada';
}

const AccountSavedOrRegistered = ({ isOpen, text }: ModalProps) => {
  return (
    <Container onClick={() => isOpen(false)}>
      <Content>
        <CloseIcon onClick={() => isOpen(false)} />

        <SuccessIcon src={success} alt="Ícone de sucesso" />

        <Title>Sucesso!</Title>

        <Description>
          A conta bancária &quot;nome da conta&quot; foi
        </Description>
        <Description>{text} com sucesso!</Description>
      </Content>
    </Container>
  );
};

export default AccountSavedOrRegistered;
