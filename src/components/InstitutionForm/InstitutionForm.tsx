import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import PlaceholderImage from '../../assets/img/placeholder-image.jpg';
import { IInstitution } from '../../interfaces/Institution';
import api from '../../services/api';
import { uploadFile } from '../../services/files';
import handleError from '../../services/handleToast';
import { imageUrl } from '../../utils/imageUrl';
import { InstitutionSchema } from '../../validations/InstitutionSchema';
import Loading from '../Loading/Loading';
import {
  ButtonsContainer,
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
} from './styles';

interface Props {
  initialInstitution?: IInstitution;
  onFinish: () => void;
}

interface IInstitutionForm {
  name: string;
  text: string;
}

const InstitutionForm = ({ initialInstitution, onFinish }: Props) => {
  const navigate = useNavigate();
  const [image, setImage] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IInstitutionForm>({
    resolver: yupResolver(InstitutionSchema),
  });

  useEffect(() => {
    reset({
      name: initialInstitution?.attributes?.name || '',
      text: initialInstitution?.attributes?.text || '',
    });
  }, [initialInstitution]);

  const onSubmit: SubmitHandler<IInstitutionForm> = async form => {
    try {
      setIsSubmitting(true);

      let imageId = 0;

      if (image) {
        const response = await uploadFile(image);

        imageId = response?.[0]?.id || 0;
      }

      const payload = {
        data: {
          name: form.name,
          text: form.text,
          ...(imageId && {
            image: {
              id: imageId,
            },
          }),
        },
      };

      if (initialInstitution) {
        await api.put(
          `/institution-assitideds/${initialInstitution.id}`,
          payload,
        );
      } else {
        await api.post('/institution-assitideds', payload);
      }

      setImage(undefined);
      onFinish();
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const imagePreviewUrl = image
    ? URL.createObjectURL(image)
    : imageUrl(initialInstitution?.attributes?.image?.data?.attributes?.url) ||
      PlaceholderImage;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Field>
          <Label>Nome</Label>
          <Input placeholder="Insira o nome" {...register('name')} />
          {errors.name?.message && (
            <ErrorMessage>{errors.name.message}</ErrorMessage>
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

      <Field
        style={{
          flex: 1,
        }}
      >
        <Label>Texto</Label>
        <TextArea placeholder="Insira o texto" {...register('text')} />
        {errors.text?.message && (
          <ErrorMessage>{errors.text.message}</ErrorMessage>
        )}
      </Field>
      <ButtonsContainer>
        <OutlinedButton onClick={() => navigate(-1)}>Voltar</OutlinedButton>
        <FilledButton disabled={isSubmitting}>
          {isSubmitting ? (
            <Loading iconColor="#ffffff" iconFontSize="1.5rem" />
          ) : (
            'Salvar'
          )}
        </FilledButton>
      </ButtonsContainer>
    </Form>
  );
};

export default InstitutionForm;
