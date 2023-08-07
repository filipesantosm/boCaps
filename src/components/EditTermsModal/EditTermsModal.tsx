import {
  ButtonDiv,
  CancelButton,
  Container,
  Content,
  DeleteButton,
  Description,
  ErrorIcon,
} from './styles';

interface ModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const EditTermsModal = ({ onClose, onConfirm }: ModalProps) => {
  return (
    <Container>
      <Content>
        <ErrorIcon />

        <Description>
          Tem certeza de que deseja <span>salvar e</span>
        </Description>
        <Description style={{ marginBottom: '1.375rem' }}>
          <span>atualizar</span> os termos de uso?
        </Description>

        <ButtonDiv>
          <CancelButton type="button" onClick={onClose}>
            Cancelar
          </CancelButton>

          <DeleteButton type="submit" onClick={onConfirm}>
            Sim, salvar e enviar
          </DeleteButton>
        </ButtonDiv>
      </Content>
    </Container>
  );
};

export default EditTermsModal;
