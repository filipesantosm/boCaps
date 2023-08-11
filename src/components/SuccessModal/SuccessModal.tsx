import {
  CloseIcon,
  Container,
  Content,
  Description,
  SuccessIcon,
  Title,
} from './styles';

interface Props {
  onClose: () => void;
  message: string;
}

const SuccessModal = ({ onClose, message }: Props) => {
  return (
    <Container>
      <Content>
        <CloseIcon onClick={onClose} />
        <SuccessIcon />

        <Title>Sucesso!</Title>

        <Description>{message}</Description>
      </Content>
    </Container>
  );
};

export default SuccessModal;
