import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NewSaleSchema } from '../../validations/NewSaleSchema';
import { NewSaleProps } from '../NewSale/NewSale';
import useImageArray from '../../hooks/useImageArray';
import handleError, { handleSuccess } from '../../services/handleToast';
import NavBar from '../../components/NavBar/NavBar';
import background from '../../assets/img/upload.svg';
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
  DescriptionTextArea,
  DisponibilityDivider,
  DisponibilityInput,
  FormColumn,
  FormDivider,
  IconTag,
  ImageDivider,
  ImageInput,
  Input,
  Label,
  MainForm,
  SaveButton,
  SwitchDivider,
  SwitchText,
  TextArea,
  Title,
  TitleDivider,
  TitleIcon,
} from './styles';
import Header from '../../components/Header/Header';
import SaleSavedOrRegistered from '../../components/SaleSavedOrRegistered/SaleSavedOrRegistered';
import { DeleteIcon } from '../ManageSales/styles';
import DeletePicture from '../../components/DeletePicture/DeletePicture';
import DeletePictureSuccess from '../../components/DeletePictureSuccess/DeletePictureSuccess';
import DeleteSale from '../../components/DeleteSale/DeleteSale';
import DeleteSaleSuccess from '../../components/DeleteSaleSuccess/DeleteSaleSuccess';
import Switch from '../../components/Switch/Switch';

const EditSale = () => {
  const [checked, setChecked] = useState(false);
  const [savedModal, setSavedModal] = useState(false);
  const [deleteImage, setDeleteImage] = useState('');
  const [deleteImageSuccess, setDeleteImageSuccess] = useState(false);
  const [deleteSaleModal, setDeleteSaleModal] = useState('');
  const [deleteSaleSuccess, setDeleteSaleSuccess] = useState(false);

  const navigate = useNavigate();

  const params = useParams();
  const id = params.id as string;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewSaleProps>({
    mode: 'onChange',
    resolver: yupResolver(NewSaleSchema),
  });

  const formWatch = watch('image');

  const imageUrl = useImageArray(formWatch)[0];

  const handleNewStatus = async () => {
    try {
      setChecked(!checked);
      handleSuccess('Status alterado com sucesso!');
    } catch (error) {
      handleError(error);
    }
  };

  const handleEditSale: SubmitHandler<NewSaleProps> = async value => {
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

        <MainForm onSubmit={handleSubmit(handleEditSale)}>
          <TitleDivider>
            <TitleIcon />

            <Title>Promoções</Title>
          </TitleDivider>

          <BackDivider>
            <IconTag onClick={() => navigate('/sales/manage')}>
              <BackIcon />
            </IconTag>

            <BackTitle>Green-fee 2x1</BackTitle>

            <SwitchDivider>
              <Switch isChecked={checked} onClick={handleNewStatus} />

              <SwitchText style={{ color: checked ? '' : '#C6CEDD' }}>
                {checked ? 'Ativo' : 'Desativado'}
              </SwitchText>
            </SwitchDivider>
          </BackDivider>

          <FormDivider>
            <FormColumn>
              <Label htmlFor="sale_name">Nome da promoção</Label>

              <Input
                type="text"
                id="sale_name"
                {...register('sale_name')}
                defaultValue="Black Friday"
                hasError={!!errors.sale_name}
              />

              <Label htmlFor="name_fee">Nome do green-fee</Label>

              <Input
                type="text"
                id="name_fee"
                {...register('name_fee')}
                defaultValue="Green-fee 2x1"
                hasError={!!errors.name_fee}
              />

              <Label htmlFor="value">Valor (R$)</Label>

              <Input
                type="text"
                id="value"
                {...register('value')}
                defaultValue="90"
                hasError={!!errors.value}
              />

              <Label htmlFor="holes">Buracos</Label>

              <Input
                type="text"
                id="holes"
                {...register('holes')}
                defaultValue="36"
                hasError={!!errors.holes}
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

              <Label htmlFor="description">Descrição</Label>

              <DescriptionTextArea
                hasError={!!errors.description}
                id="description"
                {...register('description')}
                placeholder="Ex: Compre 2 green-fees de 18 buracos pelo preço de um!"
                defaultValue="Compre 2 green-fees de 18 buracos pelo preço de um!

                36 buracos para serem usados em um dia de preferência exceto feriados.

                Validade de um ano para uso."
              />
            </FormColumn>

            <FormColumn>
              <Label htmlFor="">Disponibilidade de compra</Label>

              <DisponibilityDivider>
                <DisponibilityInput
                  type="text"
                  id="day"
                  {...register('day')}
                  defaultValue="20"
                  hasError={!!errors.day}
                  width="3.75rem"
                />

                <DisponibilityInput
                  type="text"
                  id="month"
                  {...register('month')}
                  defaultValue="09"
                  hasError={!!errors.month}
                  width="3.75rem"
                />

                <DisponibilityInput
                  type="text"
                  id="year"
                  {...register('year')}
                  defaultValue="2023"
                  hasError={!!errors.year}
                  width="4.75rem"
                />
              </DisponibilityDivider>

              <Label htmlFor="rules">Regulamento</Label>

              <TextArea
                hasError={!!errors.rules}
                id="rules"
                {...register('rules')}
                defaultValue="Jogadores iniciantes podem jogar no campo, desde que acompanhados de um Profissional de golfe credenciado
                Autorização do Starter e emissão de etiqueta para o início do jogo.
                Uso de pelo menos 1 Caddie por grupo de saída. O Caddie deverá ser pago diretamente pelo jogador;
                Utilizar o Dress Code estabelecido pelo Clube."
              />

              <ButtonDivider>
                <SaveButton type="submit">Salvar mudanças</SaveButton>

                <DeleteButton
                  type="button"
                  onClick={() => setDeleteSaleModal('id')}
                >
                  <DeleteIcon />
                  Excluir
                </DeleteButton>
              </ButtonDivider>
            </FormColumn>
          </FormDivider>
        </MainForm>
      </Content>

      {savedModal && (
        <SaleSavedOrRegistered isOpen={setSavedModal} text="salva" />
      )}

      {deleteSaleModal !== '' && (
        <DeleteSale
          id={deleteSaleModal}
          isOpen={setDeleteSaleModal}
          isOtherOpen={setDeleteSaleSuccess}
        />
      )}

      {deleteSaleSuccess && <DeleteSaleSuccess isOpen={setDeleteSaleSuccess} />}

      {deleteImage !== '' && (
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

export default EditSale;
