import { Container, Content, Description, SuccessIcon, Title } from './styles';
import success from '../../assets/img/success.svg';

interface ModalProps {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteClubSuccess = ({ isOpen }: ModalProps) => {
  return (
    <Container onClick={() => isOpen(false)}>
      <Content>
        <SuccessIcon src={success} alt="Ícone de sucesso" />

        <Title>Sucesso!</Title>

        <Description>
          Clube &quot;nome do clube&quot; excluído com sucesso.
        </Description>
      </Content>
    </Container>
  );
};

export default DeleteClubSuccess;
