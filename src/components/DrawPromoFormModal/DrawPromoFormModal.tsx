import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DrawPromo } from '../../interfaces/Draw';
import handleError, { handleSuccess } from '../../services/handleToast';
import BRLMoneyFormater from '../../utils/formaters/BRLMoneyFormater';
import { maskCurrency, unmaskCurrency } from '../../utils/mask';
import { DrawPromoSchema } from '../../validations/DrawPromoSchema';
import MaskedInput from '../MaskedInput/MaskedInput';
import {
  ButtonsContainer,
  Container,
  Content,
  ErrorMessage,
  Field,
  FilledButton,
  Form,
  Input,
  Label,
  OutlinedButton,
  Title,
} from './styles';
import api from '../../services/api';
import Loading from '../Loading/Loading';
import { AccountSelect } from '../Selects/Selects';
import { drawPromoQuantityOptions } from './utils';

interface Props {
  onClose: () => void;
  onSuccess: () => void;
  drawPromo?: DrawPromo;
}

interface Option {
  value: string;
  label: string;
}

interface IDrawPromoForm {
  Campanha: string;
  value: string;
  quantity: Option;
}

const DrawPromoFormModal = ({ drawPromo, onClose, onSuccess }: Props) => {
  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDrawPromoForm>({
    resolver: yupResolver(DrawPromoSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (drawPromo) {
      const foundQuantityOption = drawPromoQuantityOptions.find(
        option => Number(option.value) === drawPromo.attributes.quantity,
      );

      reset({
        Campanha: drawPromo.attributes.Campanha,
        quantity: foundQuantityOption,
        value: BRLMoneyFormater.format(drawPromo.attributes.value),
      });
    } else {
      reset();
    }
  }, [drawPromo]);

  const onSubmit: SubmitHandler<IDrawPromoForm> = async form => {
    setIsSubmitting(true);
    try {
      const payload = {
        data: {
          Campanha: form.Campanha,
          quantity: Number(form.quantity.value),
          value: unmaskCurrency(form.value),
        },
      };

      if (drawPromo) {
        await api.put(`/draw-promos/${drawPromo.id}`, payload);
        handleSuccess('Tipo de sorteio atualizado com sucesso!');
      } else {
        await api.post('/draw-promos', payload);
        handleSuccess('Tipo de sorteio cadastrado com sucesso!');
      }

      reset();
      onSuccess();
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Content>
        <Title>{drawPromo ? 'Editar' : 'Cadastrar'} tipo de sorteio</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <Label>Nome</Label>
            <Input
              {...register('Campanha')}
              placeholder="Insira o nome do tipo"
            />
            {errors?.Campanha?.message && (
              <ErrorMessage>{errors?.Campanha?.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Valor</Label>
            <Input
              as={MaskedInput}
              maskFunction={maskCurrency}
              placeholder="R$ 0,00"
              {...register('value')}
            />
            {errors?.value?.message && (
              <ErrorMessage>{errors?.value?.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Quantidade</Label>
            <AccountSelect
              options={drawPromoQuantityOptions}
              control={control}
              name="quantity"
              id="quantity"
              placeholder="Selecione a quantidade"
            />
            {errors?.quantity?.message && (
              <ErrorMessage>{errors?.quantity?.message}</ErrorMessage>
            )}
          </Field>
          <ButtonsContainer>
            <OutlinedButton type="button" onClick={onClose}>
              Cancelar
            </OutlinedButton>
            <FilledButton disabled={isSubmitting}>
              {isSubmitting ? <Loading iconColor="#ffffff" /> : 'Salvar'}
            </FilledButton>
          </ButtonsContainer>
        </Form>
      </Content>
    </Container>
  );
};

export default DrawPromoFormModal;
