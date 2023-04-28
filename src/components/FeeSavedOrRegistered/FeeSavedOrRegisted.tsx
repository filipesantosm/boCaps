import { Container, Content, Description, SuccessIcon, Title } from './styles';
import success from '../../assets/img/success.svg';
import { CloseIcon } from '../AccountSavedOrRegistered/styles';

interface ModalProps {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: 'salvo' | 'cadastrado';
}

const FeeSavedOrRegistered = ({ isOpen, text }: ModalProps) => {
  return (
    <Container onClick={() => isOpen(false)}>
      <Content>
        <CloseIcon onClick={() => isOpen(false)} />

        <SuccessIcon src={success} alt="Ícone de sucesso" />

        <Title>Sucesso!</Title>

        <Description>
          Green-fee &quot;nome do green-fee&quot; {text} com sucesso.
        </Description>
      </Content>
    </Container>
  );
};

export default FeeSavedOrRegistered;
