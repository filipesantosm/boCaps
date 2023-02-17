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

const DeleteAccount = ({ id, isOpen, isOtherOpen }: ModalProps) => {
  const handleDeleteAccount = async () => {
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
          conta bancária “nome da conta”?
        </Description>

        <ButtonDiv>
          <CancelButton type="button" onClick={() => isOpen('')}>
            Cancelar
          </CancelButton>

          <DeleteButton type="submit" onClick={handleDeleteAccount}>
            Excluir
          </DeleteButton>
        </ButtonDiv>
      </Content>
    </Container>
  );
};

export default DeleteAccount;
