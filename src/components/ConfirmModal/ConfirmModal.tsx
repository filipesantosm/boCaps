import {
  ButtonDiv,
  Container,
  CancelButton,
  ConfirmButton,
  Content,
  Description,
} from './styles';

interface Props {
  message: string;
  onClose: () => void;
  onConfirm: () => void;
  onCancel?: () => void;
}

const ConfirmModal = ({
  onClose,
  onConfirm,
  message,
  onCancel = onClose,
}: Props) => {
  return (
    <Container>
      <Content>
        <Description>{message}</Description>

        <ButtonDiv>
          <CancelButton type="button" onClick={onCancel}>
            Cancelar
          </CancelButton>
          <ConfirmButton type="button" onClick={onConfirm}>
            Confirmar
          </ConfirmButton>
        </ButtonDiv>
      </Content>
    </Container>
  );
};

export default ConfirmModal;
