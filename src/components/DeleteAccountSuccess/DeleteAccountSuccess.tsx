import { Container, Content, Description, SuccessIcon, Title } from './styles';
import success from '../../assets/img/success.svg';

interface ModalProps {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteAccountSuccess = ({ isOpen }: ModalProps) => {
  return (
    <Container onClick={() => isOpen(false)}>
      <Content>
        <SuccessIcon src={success} alt="Ícone de sucesso" />

        <Title>Sucesso!</Title>

        <Description>
          A conta bancária &quot;nome da conta&quot; foi
        </Description>
        <Description>excluída com sucesso.</Description>
      </Content>
    </Container>
  );
};

export default DeleteAccountSuccess;
