import { Container, Content, Description, SuccessIcon, Title } from './styles';
import success from '../../assets/img/success.svg';
import { CloseIcon } from '../AccountSavedOrRegistered/styles';

interface ModalProps {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteClientSuccess = ({ isOpen }: ModalProps) => {
  return (
    <Container onClick={() => isOpen(false)}>
      <Content>
        <CloseIcon onClick={() => isOpen(false)} />

        <SuccessIcon src={success} alt="Ícone de sucesso" />

        <Title>Sucesso!</Title>

        <Description>
          Cliente &quot;nome do cliente&quot; excluído com sucesso.
        </Description>
      </Content>
    </Container>
  );
};

export default DeleteClientSuccess;
