import { Container, Content, Description, SuccessIcon, Title } from './styles';
import success from '../../assets/img/success.svg';

interface ModalProps {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteTaxSuccess = ({ isOpen }: ModalProps) => {
  return (
    <Container onClick={() => isOpen(false)}>
      <Content>
        <SuccessIcon src={success} alt="Ícone de sucesso" />

        <Title>Sucesso!</Title>

        <Description>Taxa excluída com sucesso.</Description>
      </Content>
    </Container>
  );
};

export default DeleteTaxSuccess;