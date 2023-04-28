import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteFee from '../../components/DeleteFee/DeleteFee';
import DeleteFeeSuccess from '../../components/DeleteFeeSuccess/DeleteFeeSuccess';
import FeeSavedOrRegistered from '../../components/FeeSavedOrRegistered/FeeSavedOrRegisted';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import useImageArray from '../../hooks/useImageArray';
import handleError, { handleSuccess } from '../../services/handleToast';
import { NewFeeSchema } from '../../validations/NewFeeSchema';
import { DeleteIcon } from '../ManageFees/styles';
import { NewFeeProps } from '../NewFee/NewFee';
import Switch from '../../components/Switch/Switch';
import {
  BackDivider,
  BackIcon,
  BackTitle,
  ButtonDivider,
  Container,
  Content,
  DeleteButton,
  DeleteImageIcon,
  DeleteImageTag,
  FormColumn,
  FormDivider,
  IconTag,
  ImageDivider,
  ImageInput,
  Input,
  Label,
  MainForm,
  RadioBox,
  RadioboxColumn,
  RadioboxDivider,
  RadioboxLabel,
  SaveButton,
  SwitchDivider,
  SwitchText,
  TextArea,
  Title,
  TitleDivider,
  TitleIcon,
} from './styles';
import background from '../../assets/img/upload.svg';
import DeletePicture from '../../components/DeletePicture/DeletePicture';
import DeletePictureSuccess from '../../components/DeletePictureSuccess/DeletePictureSuccess';
import { HourColumn, HourDivider } from '../NewFee/styles';

const EditClubFee = () => {
  const [checked, setChecked] = useState(false);
  const [savedModal, setSavedModal] = useState(false);
  const [deleteImage, setDeleteImage] = useState('');
  const [deleteImageSuccess, setDeleteImageSuccess] = useState(false);
  const [deleteFeeModal, setDeleteFeeModal] = useState('');
  const [deleteFeeSuccess, setDeleteFeeSuccess] = useState(false);

  const navigate = useNavigate();

  const params = useParams();
  const clubId = params.clubId as string;
  const id = params.id as string;

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

  const imageUrl = useImageArray(formWatch)[0];

  const handleNewStatus = async () => {
    try {
      setChecked(!checked);
      handleSuccess('Status alterado com sucesso!');
    } catch (error) {
      handleError(error);
    }
  };

  const handleEditFee: SubmitHandler<NewFeeProps> = async value => {
    try {
      setSavedModal(true);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm onSubmit={handleSubmit(handleEditFee)}>
          <TitleDivider>
            <TitleIcon />

            <Title>Green-Fees</Title>
          </TitleDivider>

          <BackDivider>
            <IconTag onClick={() => navigate(`/home/${clubId}`)}>
              <BackIcon />
            </IconTag>

            <BackTitle>Chip Shot</BackTitle>

            <SwitchDivider>
              <Switch isChecked={checked} onClick={handleNewStatus} />

              <SwitchText style={{ color: checked ? '' : '#C6CEDD' }}>
                {checked ? 'Ativo' : 'Desativado'}
              </SwitchText>
            </SwitchDivider>
          </BackDivider>

          <FormDivider>
            <FormColumn>
              <Label htmlFor="name">Nome</Label>

              <Input
                hasError={!!errors.name}
                type="text"
                id="name"
                {...register('name')}
                defaultValue="Chip Shot"
              />

              <Label htmlFor="value">Valor (R$)</Label>

              <Input
                hasError={!!errors.value}
                type="text"
                id="value"
                {...register('value')}
                defaultValue="90,00"
              />

              <Label htmlFor="holes">Buracos</Label>

              <Input
                hasError={!!errors.holes}
                type="text"
                id="holes"
                {...register('holes')}
                defaultValue="09"
              />

              <Label htmlFor="image">Imagem do produto</Label>

              <ImageDivider>
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

                <DeleteImageTag>
                  <DeleteImageIcon onClick={() => setDeleteImage('id')} />
                </DeleteImageTag>
              </ImageDivider>
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

              <HourDivider>
                <HourColumn>
                  <Label htmlFor="start_hour">Horário Início</Label>

                  <Input
                    style={{ marginBottom: '0', textAlign: 'center' }}
                    type="time"
                    id="start_hour"
                    {...register('start_hour')}
                    placeholder="00:00"
                    hasError={!!errors.start_hour}
                  />
                </HourColumn>

                <HourColumn>
                  <Label htmlFor="end_hour">Horário Final</Label>

                  <Input
                    style={{ marginBottom: '0', textAlign: 'center' }}
                    type="time"
                    id="end_hour"
                    {...register('end_hour')}
                    placeholder="00:00"
                    hasError={!!errors.end_hour}
                  />
                </HourColumn>
              </HourDivider>

              <Label htmlFor="description">Regulamento</Label>

              <TextArea
                hasError={!!errors.description}
                id="description"
                {...register('description')}
                defaultValue="Jogadores iniciantes podem jogar no campo, desde que acompanhados de um Profissional de golfe credenciado
                Autorização do Starter e emissão de etiqueta para o início do jogo.
                Uso de pelo menos 1 Caddie por grupo de saída. O Caddie deverá ser pago diretamente pelo jogador;
                Utilizar o Dress Code estabelecido pelo Clube."
              />
            </FormColumn>
          </FormDivider>

          <ButtonDivider>
            <SaveButton type="submit">Salvar mudanças</SaveButton>

            <DeleteButton type="button" onClick={() => setDeleteFeeModal('id')}>
              <DeleteIcon />
              Excluir
            </DeleteButton>
          </ButtonDivider>
        </MainForm>
      </Content>
      {savedModal && (
        <FeeSavedOrRegistered isOpen={setSavedModal} text="salvo" />
      )}

      {deleteFeeModal && (
        <DeleteFee
          isOpen={setDeleteFeeModal}
          id={id}
          isOtherOpen={setDeleteFeeSuccess}
        />
      )}

      {deleteFeeSuccess && <DeleteFeeSuccess isOpen={setDeleteFeeSuccess} />}

      {deleteImage && (
        <DeletePicture
          id={id}
          isOpen={setDeleteImage}
          isOtherOpen={setDeleteImageSuccess}
        />
      )}

      {deleteImageSuccess && (
        <DeletePictureSuccess isOpen={setDeleteImageSuccess} />
      )}
    </Container>
  );
};

export default EditClubFee;
