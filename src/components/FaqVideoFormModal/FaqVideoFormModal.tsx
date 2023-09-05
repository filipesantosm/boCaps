import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFaqVideo } from '../../interfaces/Faq';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import { FaqVideoSchema } from '../../validations/FaqSchema';
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

interface Props {
  onClose: () => void;
  initialFaqVideo?: IFaqVideo;
  onFinishSubmit: () => void;
}

interface IFaqVideoForm {
  title: string;
  url: string;
}

const FaqVideoFormModal = ({
  onClose,
  onFinishSubmit,
  initialFaqVideo,
}: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFaqVideoForm>({
    defaultValues: {
      title: initialFaqVideo?.attributes?.title || '',
      url: initialFaqVideo?.attributes?.url || '',
    },
    resolver: yupResolver(FaqVideoSchema),
  });

  const onSubmit: SubmitHandler<IFaqVideoForm> = async form => {
    try {
      setIsSubmitting(true);

      if (initialFaqVideo) {
        await api.put(`/faq-videos/${initialFaqVideo.id}`, {
          data: {
            title: form.title,
            url: form.url,
          },
        });
      } else {
        await api.post('/faq-videos', {
          data: {
            title: form.title,
            url: form.url,
          },
        });
      }

      reset();
      handleSuccess('Vídeo criado com sucesso!');
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
        <Title>{initialFaqVideo ? 'Editar' : 'Cadastrar'} vídeo</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <Label>Título</Label>
            <Input {...register('title')} placeholder="Insira o título" />
            {errors?.title?.message && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Link YouTube</Label>
            <Input
              {...register('url')}
              placeholder="Ex: https://www.youtube.com/watch?v=zWTa_KuaIcE"
            />
            {errors?.url?.message && (
              <ErrorMessage>{errors.url.message}</ErrorMessage>
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

export default FaqVideoFormModal;
