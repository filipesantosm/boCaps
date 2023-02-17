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

const DeleteClub = ({ id, isOpen, isOtherOpen }: ModalProps) => {
  const handleDeleteClub = async () => {
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
          Tem certeza de que deseja <span>excluir</span> o
        </Description>
        <Description style={{ marginBottom: '1.375rem' }}>
          clube “nome do clube”?
        </Description>

        <ButtonDiv>
          <CancelButton type="button" onClick={() => isOpen('')}>
            Cancelar
          </CancelButton>

          <DeleteButton type="submit" onClick={handleDeleteClub}>
            Excluir
          </DeleteButton>
        </ButtonDiv>
      </Content>
    </Container>
  );
};

export default DeleteClub;
