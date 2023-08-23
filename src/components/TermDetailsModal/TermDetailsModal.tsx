import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PlaceholderImage from '../../assets/img/placeholder-image.jpg';
import { ITermDetails } from '../../interfaces/Terms';
import api from '../../services/api';
import { uploadFile } from '../../services/files';
import handleError from '../../services/handleToast';
import { imageUrl } from '../../utils/imageUrl';
import Loading from '../Loading/Loading';
import {
  ButtonsContainer,
  Container,
  Content,
  ErrorMessage,
  Field,
  FilledButton,
  Form,
  FormRow,
  Image,
  ImageInput,
  ImageWrapper,
  Input,
  Label,
  OutlinedButton,
  TextArea,
  Title,
} from './styles';

interface ITermDetailsForm {
  title: string;
  description: string;
}

interface Props {
  onClose: () => void;
  onSuccess: () => void;
  initialTermDetails?: ITermDetails;
}

const TermDetailsModal = ({
  onClose,
  onSuccess,
  initialTermDetails,
}: Props) => {
  const [image, setImage] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ITermDetailsForm>({
    defaultValues: {
      description: initialTermDetails?.attributes?.description,
      title: initialTermDetails?.attributes?.title,
    },
  });

  const onSubmit: SubmitHandler<ITermDetailsForm> = async form => {
    setIsSubmitting(true);

    try {
      let imageId = 0;

      if (image) {
        const response = await uploadFile(image);

        imageId = response?.[0]?.id || 0;
      }

      const payload = {
        data: {
          title: form.title,
          description: form.description,
          term_use: {
            id: 5,
          },
          ...(imageId && {
            image: [imageId],
          }),
        },
      };

      if (initialTermDetails) {
        await api.put(`/term-details/${initialTermDetails.id}`, payload);
      } else {
        await api.post('/term-details', payload);
      }
      setImage(undefined);
      reset();
      onSuccess();
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const imagePreviewUrl = image
    ? URL.createObjectURL(image)
    : imageUrl(
        initialTermDetails?.attributes?.image?.data?.[0]?.attributes?.url,
      ) || PlaceholderImage;

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>
            {initialTermDetails ? 'Alterar' : 'Cadastrar'} - Como funciona
          </Title>

          <FormRow>
            <Field>
              <Label>Título</Label>
              <Input placeholder="Insira o título" {...register('title')} />
              {errors.title?.message && (
                <ErrorMessage>{errors.title.message}</ErrorMessage>
              )}
            </Field>

            <ImageWrapper>
              <Image src={imagePreviewUrl} />
              <ImageInput
                type="file"
                accept="image/*"
                onChange={e => {
                  if (e.target.files?.[0]) {
                    setImage(e.target.files[0]);

                    e.target.value = '';
                  }
                }}
              />
            </ImageWrapper>
          </FormRow>
          <Field>
            <Label>Texto</Label>
            <TextArea
              placeholder="Insira o texto"
              {...register('description')}
            />
            {errors.description?.message && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
          </Field>
          <ButtonsContainer>
            <OutlinedButton type="button" onClick={onClose}>
              Cancelar
            </OutlinedButton>
            <FilledButton disabled={isSubmitting}>
              {isSubmitting ? (
                <Loading iconColor="#ffffff" iconFontSize="1.5rem" />
              ) : (
                'Salvar'
              )}
            </FilledButton>
          </ButtonsContainer>
        </Form>
      </Content>
    </Container>
  );
};

export default TermDetailsModal;
