import { Container, Content, Description, SuccessIcon, Title } from './styles';
import success from '../../assets/img/success.svg';
import { CloseIcon } from '../AccountSavedOrRegistered/styles';

interface ModalProps {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTaxSuccess = ({ isOpen }: ModalProps) => {
  return (
    <Container onClick={() => isOpen(false)}>
      <Content>
        <CloseIcon onClick={() => isOpen(false)} />

        <SuccessIcon src={success} alt="Ícone de sucesso" />

        <Title>Sucesso!</Title>

        <Description>
          Taxa &quot;nome da taxa&quot; atualizada com sucesso.
        </Description>
      </Content>
    </Container>
  );
};

export default EditTaxSuccess;
