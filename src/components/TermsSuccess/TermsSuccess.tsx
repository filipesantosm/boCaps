import { useNavigate } from 'react-router-dom';
import { Container, Content, Description, SuccessIcon, Title } from './styles';
import success from '../../assets/img/success.svg';

interface ModalProps {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TermsSuccess = ({ isOpen }: ModalProps) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        isOpen(false);
        navigate('/terms');
      }}
    >
      <Content>
        <SuccessIcon src={success} alt="Ícone de sucesso" />

        <Title>Sucesso!</Title>

        <Description>Termos de Uso, Política e Privacidade foram</Description>
        <Description>atualizados com sucesso!</Description>
      </Content>
    </Container>
  );
};

export default TermsSuccess;
