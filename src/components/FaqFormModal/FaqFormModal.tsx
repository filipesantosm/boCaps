import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFaq } from '../../interfaces/Faq';
import Loading from '../Loading/Loading';
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
import handleError, { handleSuccess } from '../../services/handleToast';
import api from '../../services/api';
import { FaqSchema } from '../../validations/FaqSchema';

interface Props {
  onClose: () => void;
  onFinishSubmit: () => void;
  initialFaq?: IFaq;
}

interface IFaqForm {
  title: string;
  description: string;
}

const FaqFormModal = ({ onClose, onFinishSubmit, initialFaq }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFaqForm>({
    defaultValues: {
      title: initialFaq?.attributes?.title || '',
      description: initialFaq?.attributes?.description || '',
    },
    resolver: yupResolver(FaqSchema),
  });

  const onSubmit: SubmitHandler<IFaqForm> = async form => {
    try {
      setIsSubmitting(true);

      if (initialFaq) {
        await api.put(`/faqs/${initialFaq.id}`, {
          data: {
            title: form.title,
            description: form.description,
          },
        });
      } else {
        await api.post('/faqs', {
          data: {
            title: form.title,
            description: form.description,
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
        <Title>
          {initialFaq ? 'Editar' : 'Cadastrar'} categoria de pergunta
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <Label>Título</Label>
            <Input {...register('title')} placeholder="Insira o título" />
            {errors?.title?.message && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Descrição</Label>
            <Input
              {...register('description')}
              placeholder="Insira uma descrição"
            />
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

export default FaqFormModal;
