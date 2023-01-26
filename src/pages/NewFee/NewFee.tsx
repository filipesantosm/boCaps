import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FeeSavedOrRegistered from '../../components/FeeSavedOrRegistered/FeeSavedOrRegisted';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import handleError from '../../services/handleToast';
import { NewFeeSchema } from '../../validations/NewFeeSchema';
import {
  BackDivider,
  BackIcon,
  BackTitle,
  ButtonDivider,
  CancelButton,
  Container,
  Content,
  FormColumn,
  FormDivider,
  IconTag,
  ImageInput,
  Input,
  Label,
  MainForm,
  RadioBox,
  RadioboxColumn,
  RadioboxDivider,
  RadioboxLabel,
  RegisterButton,
  TextArea,
  Title,
  TitleDivider,
  TitleIcon,
} from './styles';
import background from '../../assets/img/upload.svg';

interface NewFeeProps {
  name: string;
  value: number;
  holes: number;
  image: BlobPart[];
  days_of_week: string;
  description: string;
}

const NewFee = () => {
  const [registeredModal, setRegisteredModal] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewFeeProps>({
    mode: 'onChange',
    resolver: yupResolver(NewFeeSchema),
  });

  const formWatch = watch('image');
  const daySelected = watch('days_of_week');

  const imageUrl = formWatch?.length
    ? URL.createObjectURL(new Blob(formWatch))
    : '';

  const handleNewFee = async () => {
    try {
      setRegisteredModal(true);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm onSubmit={handleSubmit(handleNewFee)}>
          <TitleDivider>
            <TitleIcon />

            <Title>Green-Fees</Title>
          </TitleDivider>

          <BackDivider>
            <IconTag onClick={() => navigate('/home/manage')}>
              <BackIcon />
            </IconTag>

            <BackTitle>Novo Green-fee</BackTitle>
          </BackDivider>

          <FormDivider>
            <FormColumn>
              <Label htmlFor="name">Nome</Label>

              <Input
                type="text"
                id="name"
                {...register('name')}
                placeholder="Digite um nome"
                hasError={!!errors.name}
              />

              <Label htmlFor="value">Valor (R$)</Label>

              <Input
                type="text"
                id="value"
                {...register('value')}
                placeholder="Ex.: 200,00"
                hasError={!!errors.value}
              />

              <Label htmlFor="holes">Buracos</Label>

              <Input
                type="text"
                id="holes"
                {...register('holes')}
                placeholder="Ex.: 12"
                hasError={!!errors.holes}
              />

              <Label htmlFor="image">Imagem do produto</Label>

              <ImageInput
                hasError={!!errors.image}
                type="file"
                id="image"
                {...register('image')}
                style={{
                  backgroundImage: formWatch
                    ? `url(${imageUrl})`
                    : `url(${background})`,
                  backgroundSize: formWatch ? 'cover' : '',
                }}
                accept="image/*"
              />
            </FormColumn>

            <FormColumn>
              <Label htmlFor="">Dias de uso</Label>

              <RadioboxDivider>
                <RadioboxColumn hasError={!!errors.days_of_week}>
                  <RadioBox
                    type="radio"
                    id="all"
                    value="all"
                    {...register('days_of_week')}
                  />

                  <RadioboxLabel
                    htmlFor="all"
                    isSelected={daySelected === 'all'}
                  >
                    Todos os dias
                  </RadioboxLabel>
                </RadioboxColumn>

                <RadioboxColumn hasError={!!errors.days_of_week}>
                  <RadioBox
                    type="radio"
                    id="weekend"
                    value="weekend"
                    {...register('days_of_week')}
                  />

                  <RadioboxLabel
                    htmlFor="weekend"
                    isSelected={daySelected === 'weekend'}
                  >
                    Final de semana
                  </RadioboxLabel>
                </RadioboxColumn>

                <RadioboxColumn hasError={!!errors.days_of_week}>
                  <RadioBox
                    type="radio"
                    id="weekdays"
                    value="weekdays"
                    {...register('days_of_week')}
                  />

                  <RadioboxLabel
                    htmlFor="weekdays"
                    isSelected={daySelected === 'weekdays'}
                  >
                    Segunda à sexta
                  </RadioboxLabel>
                </RadioboxColumn>
              </RadioboxDivider>

              <Label htmlFor="description">Regulamento</Label>

              <TextArea
                hasError={!!errors.description}
                id="description"
                {...register('description')}
                placeholder="Clique para digitar..."
              />
            </FormColumn>
          </FormDivider>

          <ButtonDivider>
            <RegisterButton type="submit">Cadastrar green-fee</RegisterButton>

            <CancelButton
              type="button"
              onClick={() => navigate('/home/manage')}
            >
              Cancelar
            </CancelButton>
          </ButtonDivider>
        </MainForm>
      </Content>

      {registeredModal && (
        <FeeSavedOrRegistered isOpen={setRegisteredModal} text="cadastrado" />
      )}
    </Container>
  );
};

export default NewFee;
