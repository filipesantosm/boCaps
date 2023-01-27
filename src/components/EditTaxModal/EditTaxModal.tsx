import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useOutside } from '../../hooks/useOutside';
import handleError, { handleSuccess } from '../../services/handleToast';
import { EditTaxSchema } from '../../validations/EditTaxSchema';
import {
  ButtonDivider,
  CancelButton,
  Container,
  Content,
  DeleteDivider,
  DeleteIcon,
  Input,
  InputDivider,
  SaveButton,
  Subtitle,
  Title,
} from './styles';

interface EditTaxProps {
  isOpen: React.Dispatch<React.SetStateAction<string>>;
  isOtherOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

interface EditProps {
  tax: string;
}

const EditTaxModal = ({ isOpen, id, isOtherOpen }: EditTaxProps) => {
  const modalRef = useRef(null);

  useOutside(modalRef, () => isOpen(''));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProps>({
    mode: 'onChange',
    resolver: yupResolver(EditTaxSchema),
  });

  const handleEditUser = async () => {
    try {
      isOpen('');
      isOtherOpen(true);
    } catch (error) {
      handleError(error);
    }
  };

  const tax = Math.random();

  const handleDeleteTax = async () => {
    try {
      if (tax !== 0) {
        isOpen('');
        handleSuccess('Taxa deletada com sucesso!');
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Container>
      <Content ref={modalRef} onSubmit={handleSubmit(handleEditUser)}>
        <Title>Atenas Golf Club</Title>

        <Subtitle>Taxa do estabelecimento (%)</Subtitle>

        <InputDivider>
          <Input
            type="text"
            hasError={!!errors.tax}
            id="tax"
            {...register('tax')}
            placeholder="Ex.: 50"
          />

          <DeleteDivider hasTax={tax !== 0} onClick={() => handleDeleteTax()}>
            <DeleteIcon />
            Excluir taxa
          </DeleteDivider>
        </InputDivider>

        <ButtonDivider>
          <SaveButton type="submit">Salvar</SaveButton>

          <CancelButton onClick={() => isOpen('')}>Cancelar</CancelButton>
        </ButtonDivider>
      </Content>
    </Container>
  );
};

export default EditTaxModal;
