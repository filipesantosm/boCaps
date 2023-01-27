import React from 'react';
import handleError from '../../services/handleToast';
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
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOtherOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTermsModal = ({ isOpen, isOtherOpen }: ModalProps) => {
  const handleEditTerms = async () => {
    try {
      isOpen(false);
      isOtherOpen(true);
    } catch (error) {
      handleError(error);
    }
  };

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
          <CancelButton type="button" onClick={() => isOpen(false)}>
            Cancelar
          </CancelButton>

          <DeleteButton type="submit" onClick={handleEditTerms}>
            Sim, salvar e enviar
          </DeleteButton>
        </ButtonDiv>
      </Content>
    </Container>
  );
};

export default EditTermsModal;
