import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  BackDivider,
  BackIcon,
  BackTitle,
  ButtonDivider,
  CancelButton,
  Container,
  Content,
  DescriptionTextArea,
  DisponibilityDivider,
  DisponibilityInput,
  FormColumn,
  FormDivider,
  IconTag,
  ImageInput,
  Input,
  Label,
  MainForm,
  RegisterButton,
  TextArea,
  Title,
  TitleDivider,
  TitleIcon,
} from './styles';
import useImageArray from '../../hooks/useImageArray';
import handleError from '../../services/handleToast';
import { NewSaleSchema } from '../../validations/NewSaleSchema';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import background from '../../assets/img/upload.svg';
import SaleSavedOrRegistered from '../../components/SaleSavedOrRegistered/SaleSavedOrRegistered';

interface NewSaleProps {
  sale_name: string;
  name_fee: string;
  value: number;
  holes: number;
  image: FileList;
  description: string;
  day: number;
  month: number;
  year: number;
  rules: string;
}

const NewSale = () => {
  const [registeredModal, setRegisteredModal] = useState(false);

  const navigate = useNavigate();

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

  const handleNewSale: SubmitHandler<NewSaleProps> = async value => {
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

        <MainForm onSubmit={handleSubmit(handleNewSale)}>
          <TitleDivider>
            <TitleIcon />

            <Title>Promoções</Title>
          </TitleDivider>

          <BackDivider>
            <IconTag onClick={() => navigate('/sales/manage')}>
              <BackIcon />
            </IconTag>

            <BackTitle>Nova promoção</BackTitle>
          </BackDivider>

          <FormDivider>
            <FormColumn>
              <Label htmlFor="sale_name">Nome da promoção</Label>

              <Input
                type="text"
                id="sale_name"
                {...register('sale_name')}
                placeholder="Ex.: Black Friday"
                hasError={!!errors.sale_name}
              />

              <Label htmlFor="name_fee">Nome do green-fee</Label>

              <Input
                type="text"
                id="name_fee"
                {...register('name_fee')}
                placeholder="Ex.: Green-fee 2x1"
                hasError={!!errors.name_fee}
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

              <Label htmlFor="description">Descrição</Label>

              <DescriptionTextArea
                hasError={!!errors.description}
                id="description"
                {...register('description')}
                placeholder="Ex: Compre 2 green-fees de 18 buracos pelo preço de um!"
              />
            </FormColumn>

            <FormColumn>
              <Label htmlFor="">Disponibilidade de compra</Label>

              <DisponibilityDivider>
                <DisponibilityInput
                  type="text"
                  id="day"
                  {...register('day')}
                  placeholder="dia"
                  hasError={!!errors.day}
                  width="3.75rem"
                />

                <DisponibilityInput
                  type="text"
                  id="month"
                  {...register('month')}
                  placeholder="mês"
                  hasError={!!errors.month}
                  width="3.75rem"
                />

                <DisponibilityInput
                  type="text"
                  id="year"
                  {...register('year')}
                  placeholder="ano"
                  hasError={!!errors.year}
                  width="4.75rem"
                />
              </DisponibilityDivider>

              <Label htmlFor="rules">Regulamento</Label>

              <TextArea
                hasError={!!errors.rules}
                id="rules"
                {...register('rules')}
                placeholder="Ex: Cada jogador visitante, deve se apresentar na Starter House e cumprir com as normas dos clubes parceiros."
              />

              <ButtonDivider>
                <RegisterButton type="submit">
                  Cadastrar promoção
                </RegisterButton>

                <CancelButton
                  type="button"
                  onClick={() => navigate('/sales/manage')}
                >
                  Cancelar
                </CancelButton>
              </ButtonDivider>
            </FormColumn>
          </FormDivider>
        </MainForm>
      </Content>
      {registeredModal && (
        <SaleSavedOrRegistered isOpen={setRegisteredModal} text="cadastrada" />
      )}
    </Container>
  );
};

export default NewSale;
