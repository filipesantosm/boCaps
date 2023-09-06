import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFaqQuestion } from '../../interfaces/Faq';
import {
  ButtonsContainer,
  Container,
  Content,
  ErrorMessage,
  Field,
  FilledButton,
  Form,
  Label,
  OutlinedButton,
  Textarea,
  Title,
} from './styles';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import Loading from '../Loading/Loading';
import { FaqQuestionSchema } from '../../validations/FaqSchema';

interface Props {
  onClose: () => void;
  onFinishSubmit: () => void;
  initialFaqQuestion?: IFaqQuestion;
  faqId: string;
}

interface IFaqQuestionForm {
  question: string;
  response: string;
}

const FaqQuestionFormModal = ({
  faqId,
  onClose,
  onFinishSubmit,
  initialFaqQuestion,
}: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFaqQuestionForm>({
    defaultValues: {
      question: initialFaqQuestion?.attributes?.question || '',
      response: initialFaqQuestion?.attributes?.response || '',
    },
    resolver: yupResolver(FaqQuestionSchema),
  });

  const onSubmit: SubmitHandler<IFaqQuestionForm> = async form => {
    try {
      setIsSubmitting(true);

      if (initialFaqQuestion) {
        await api.put(`/faq-questions/${initialFaqQuestion.id}`, {
          data: {
            question: form.question,
            response: form.response,
          },
        });
      } else {
        await api.post('/faq-questions', {
          data: {
            question: form.question,
            response: form.response,
            faq: {
              id: Number(faqId),
            },
          },
        });
      }

      reset();
      handleSuccess('Criada com sucesso!');
      onFinishSubmit();
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Content>
        <Title>{initialFaqQuestion ? 'Editar' : 'Cadastrar'} pergunta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <Label>Pergunta</Label>
            <Textarea
              {...register('question')}
              placeholder="Insira a pergunta"
            />
            {errors?.question?.message && (
              <ErrorMessage>{errors.question.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Resposta</Label>
            <Textarea
              {...register('response')}
              placeholder="Insira a resposta"
            />
            {errors?.response?.message && (
              <ErrorMessage>{errors.response.message}</ErrorMessage>
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

export default FaqQuestionFormModal;
