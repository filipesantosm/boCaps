import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDrawOptions } from '../../hooks/useDrawOptions';
import handleError from '../../services/handleToast';
import BRLMoneyFormater from '../../utils/formaters/BRLMoneyFormater';
import { maskCurrency } from '../../utils/mask';
import Loading from '../Loading/Loading';
import MaskedInput from '../MaskedInput/MaskedInput';
import Select from '../Select/Select';
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

interface Props {
  onClose: () => void;
  onSuccess: () => void;
  initialScore?: any; // TODO: Tipagem após integração
  isEditing: boolean;
}

interface Option {
  value: string | number;
  label: string;
}

interface IScoreForm {
  name: string;
  score: string;
  value: string;
  draws: Option[];
}

const ScoreModal = ({ initialScore, isEditing, onClose, onSuccess }: Props) => {
  const { drawOptions } = useDrawOptions();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IScoreForm>({
    defaultValues: initialScore
      ? {
          name: initialScore?.name ?? '',
          score: initialScore?.score ?? '',
          value: initialScore?.value
            ? BRLMoneyFormater.format(initialScore.value)
            : '',
        }
      : undefined,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<IScoreForm> = form => {
    setIsSubmitting(true);
    try {
      // TODO: integrar
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
        <Title>{isEditing ? 'Editar score' : 'Cadastrar score'}</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <Label>Nome</Label>
            <Input {...register('name')} />
            {errors?.name?.message && (
              <ErrorMessage>{errors.name.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Score</Label>
            <Input {...register('score')} />
            {errors?.score?.message && (
              <ErrorMessage>{errors.score.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Valor</Label>
            <Input
              as={MaskedInput}
              maskFunction={maskCurrency}
              {...register('value')}
            />
            {errors?.value?.message && (
              <ErrorMessage>{errors.value.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Sorteios</Label>
            <Controller
              control={control}
              name="draws"
              render={({ field: { onChange, value } }) => (
                <Select
                  options={drawOptions}
                  isMulti
                  onChange={onChange}
                  value={value}
                />
              )}
            />

            {errors?.draws?.message && (
              <ErrorMessage>{errors.draws.message}</ErrorMessage>
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

export default ScoreModal;
