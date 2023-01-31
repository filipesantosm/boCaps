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
  id: string;
  isOpen: React.Dispatch<React.SetStateAction<string>>;
  isOtherOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeletePicture = ({ id, isOpen, isOtherOpen }: ModalProps) => {
  const handleDeletePicture = async () => {
    try {
      isOpen('');
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
          Tem certeza de que deseja <span>excluir</span> a
        </Description>
        <Description style={{ marginBottom: '1.375rem' }}>
          foto do produto?
        </Description>

        <ButtonDiv>
          <CancelButton type="button" onClick={() => isOpen('')}>
            Cancelar
          </CancelButton>

          <DeleteButton type="submit" onClick={handleDeletePicture}>
            Excluir
          </DeleteButton>
        </ButtonDiv>
      </Content>
    </Container>
  );
};

export default DeletePicture;
