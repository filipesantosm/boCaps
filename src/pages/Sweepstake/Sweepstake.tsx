/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  icon_ArrowSection,
  img_placeholderImg,
  img_placeholderPDF,
} from '../../assets';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import DrawPremiumSection from '../../components/DrawPremiumSection/DrawPremiumSection';
import Loading from '../../components/Loading/Loading';
import Select from '../../components/Select/Select';
import SweepstakeInput from '../../components/SweepstakeInput/SweepstakeInput';
import SwitchColor from '../../components/SwitchColor/SwitchColor';
import { useDrawPromos } from '../../hooks/useDrawPromos';
import { useDrawTypeChance } from '../../hooks/useDrawTypeChance';
import { usePremiumCategories } from '../../hooks/usePremiumCategories';
import { usePremiumTypes } from '../../hooks/usePremiumTypes';
import { IDraw } from '../../interfaces/Draw';
import { UploadFileResponse } from '../../interfaces/Image';
import { ISweepstakeForm } from '../../interfaces/SweepstakeForm';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import { getDrawImage, imageUrl } from '../../utils/imageUrl';
import { maskSusep } from '../../utils/mask';
import {
  AdditionalContainer,
  AdditionalDataSection,
  ButtonFooterContainer,
  ChanceContainer,
  ChanceLine,
  ChanceSection,
  Content,
  Image,
  ImageItem,
  ImageLabelButton,
  ImageLine,
  InputLine,
  MainHeader,
  MainInputContainer,
  MainSection,
  ObservationInput,
  ObservationLabel,
  ObservationTextLabel,
  RetrieveArrowButton,
  RetrieveContainer,
  RetrieveHeader,
  SaveButton,
  SelectLabel,
  SelectWrapper,
  SelectWrapperAdditional,
  SwitchWrapper,
  Title,
  TitleContainer,
} from './styles';
import {
  getInitialDrawForm,
  getIsoStringFromDateAndTime,
  isScratchCardOptions,
} from './utils';

const initialHandleConfirmModal = {
  isOpen: false,
  onClose: () => {},
  onConfirm: () => {},
  onCancel: () => {},
  message: '',
};

const Sweepstake = () => {
  const { drawId } = useParams();
  const navigate = useNavigate();

  const [draw, setDraw] = useState<IDraw>();
  const [openedSections, setOpenedSections] = useState<string[]>([]);
  const [handleConfirmModal, setHandleConfirmModal] = useState(
    initialHandleConfirmModal,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    watch,
    reset,
  } = useForm<ISweepstakeForm>({
    defaultValues: {
      chanceSection: {
        typeChance: 1,
      },
      drawHour: '09:00',
      additionalDataSection: {
        limSale: 30,
      },
    },
  });

  useEffect(() => {
    if (drawId) {
      getDraw(drawId);
    }
  }, [drawId]);

  const { drawPromoOptions, drawPromos } = useDrawPromos();

  const { drawTypeChanceOptions, drawTypeChances } = useDrawTypeChance();

  const { premiumCategories } = usePremiumCategories();

  const { drawTypePremiums } = usePremiumTypes();

  const getDraw = async (id: string) => {
    try {
      const { data } = await api.get<{
        data: IDraw;
      }>(`/draws/${id}`, {
        params: {
          populate: ['image', 'draw_type_chance', 'draw_promos', 'pdfTitle'],
        },
      });

      setDraw(data.data);
      reset(getInitialDrawForm(data.data));
    } catch (error) {
      handleError(error);
    }
  };

  const uploadFile = async (image: File) => {
    const formData = new FormData();

    formData.append('files', image);

    const { data } = await api.post<UploadFileResponse>('/upload', formData);

    return data;
  };

  const onSubmit: SubmitHandler<ISweepstakeForm> = async form => {
    if (draw && draw.attributes.isPublished) {
      setHandleConfirmModal(prev => ({
        ...prev,
        isOpen: true,
        message: 'O sorteio já está publicado, deseja realmente atualizá-lo?',
        onCancel: handleCloseConfirmModal,
        onClose: handleCloseConfirmModal,
        onConfirm: () => handleSave(form),
      }));
      return;
    }

    handleSave(form);
  };

  const handleSave = async (form: ISweepstakeForm) => {
    const drawDate = getIsoStringFromDateAndTime(form.drawDate, form.drawHour);
    const startDate = getIsoStringFromDateAndTime(
      form.startDate,
      form.startHour,
    );
    const endDate = getIsoStringFromDateAndTime(form.endDate, form.endHour);

    handleCloseConfirmModal();

    setIsSubmitting(true);

    try {
      let imageId = 0;
      let titlePdfId = 0;

      if (form.additionalDataSection.image) {
        const imageResponse = await uploadFile(
          form.additionalDataSection.image,
        );

        imageId = imageResponse?.[0]?.id || 0;
      }

      if (form.additionalDataSection.cardImage) {
        const fileResponse = await uploadFile(
          form.additionalDataSection.cardImage,
        );

        titlePdfId = fileResponse?.[0]?.id || 0;
      }

      const foundChance = drawTypeChances.find(
        chance =>
          chance.attributes.total === Number(form.chanceSection.typeChance),
      );

      const payload = {
        data: {
          id: draw ? draw.id : undefined,
          name: form.name,
          description: form.additionalDataSection.description,
          dateStart: startDate,
          dateFinal: endDate,
          dateDraw: drawDate,
          limSale: form.additionalDataSection.limSale
            ? Number(form.additionalDataSection.limSale)
            : undefined,
          isScratchCard: form.additionalDataSection.isScratchCard === 'true',
          susep: form.susep ? form.susep : undefined,
          number: form.number ? Number(form.number) : undefined,
          chanceInicial01: form.chanceSection.chanceInicial01
            ? Number(form.chanceSection.chanceInicial01)
            : undefined,
          chanceFinal01: form.chanceSection.chanceFinal01
            ? Number(form.chanceSection.chanceFinal01)
            : undefined,
          intervalChance1: form.chanceSection.intervalChance1
            ? Number(form.chanceSection.intervalChance1)
            : undefined,
          chanceInicial02: form.chanceSection.chanceInicial02
            ? Number(form.chanceSection.chanceInicial02)
            : undefined,
          chanceFinal02: form.chanceSection.chanceFinal02
            ? Number(form.chanceSection.chanceFinal02)
            : undefined,
          intervalChance2: form.chanceSection.intervalChance2
            ? Number(form.chanceSection.intervalChance2)
            : undefined,
          chanceInicial03: form.chanceSection.chanceInicial03
            ? Number(form.chanceSection.chanceInicial03)
            : undefined,
          chanceFinal03: form.chanceSection.chanceFinal03
            ? Number(form.chanceSection.chanceFinal03)
            : undefined,
          lnkYoutube: form.additionalDataSection.lnkYoutube,
          lnkYoutubeDraw: form.additionalDataSection.lnkYoutubeDraw,
          redemptionPercent: form.additionalDataSection.redemptionPercent
            ? Number(form.additionalDataSection.redemptionPercent)
            : undefined,
          redemptionValue: form.additionalDataSection.redemptionValue
            ? Number(form.additionalDataSection.redemptionValue)
            : undefined,
          ...(imageId && {
            image: {
              id: imageId,
            },
          }),
          ...(titlePdfId && {
            pdfTitle: {
              id: titlePdfId,
            },
          }),
          ...(foundChance && {
            draw_type_chance: foundChance,
          }),
          draw_promos: form?.additionalDataSection?.saleValue?.length
            ? form.additionalDataSection.saleValue
                .map(value => {
                  const foundDrawPromo = drawPromos.find(
                    drawPromo => drawPromo.id === Number(value),
                  );

                  if (foundDrawPromo) {
                    return {
                      id: foundDrawPromo.id,
                      ...foundDrawPromo.attributes,
                    };
                  }
                  return undefined;
                })
                .filter(Boolean)
            : undefined,
        },
      };

      if (draw?.attributes.isPublished || draw?.attributes.isValidated) {
        await api.post(`/updateDraw`, payload);

        getDraw(String(draw.id));
      } else if (draw) {
        await api.put(`/draws/${draw.id}`, payload);

        getDraw(String(draw.id));
      } else {
        const { data } = await api.post('/draws', payload);

        getDraw(data.data.id);
      }

      handleSuccess('Sorteio salvo com sucesso!');
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleValidate = async () => {
    if (!draw) {
      return;
    }

    setIsSubmitting(true);

    try {
      await api.get('/validateDraw', {
        params: {
          id: draw.id,
        },
      });

      getDraw(String(draw.id));
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePublish = async () => {
    if (!draw) {
      handleError('Salve o sorteio antes de ativá-lo');
      return;
    }

    if (draw.attributes.isPublished) {
      return;
    }

    try {
      await api.get('activeDraw', {
        params: {
          id: draw.id,
        },
      });

      getDraw(draw.id.toString());
    } catch (error) {
      handleError(error);
    }
  };

  const handleCloseConfirmModal = () => {
    setHandleConfirmModal(initialHandleConfirmModal);
  };

  const newImage = watch('additionalDataSection.image');
  const newPdf = watch('additionalDataSection.cardImage');

  const previewImageUrl = newImage
    ? URL.createObjectURL(newImage)
    : getDrawImage(draw);

  const previewPdfUrl = newPdf
    ? URL.createObjectURL(newPdf)
    : imageUrl(draw?.attributes?.pdfTitle?.data?.attributes?.url);

  const typeChance = watch('chanceSection.typeChance');

  const hasScratchCard =
    watch('additionalDataSection.isScratchCard') === 'true';

  const filteredCategories = hasScratchCard
    ? premiumCategories.filter(premiumCategory => premiumCategory.id !== 2)
    : premiumCategories;

  /* const drawDate = draw?.attributes?.dateDraw
    ? parseISO(draw.attributes.dateDraw)
    : undefined; */

  const disableEditing = isSubmitting;

  return (
    <Content onSubmit={handleSubmit(onSubmit)}>
      <TitleContainer>
        <Title>Sorteios</Title>
      </TitleContainer>
      <MainSection>
        <MainHeader>
          Dados principais
          {draw &&
            (draw?.attributes?.isValidated || draw?.attributes.isPublished ? (
              <SwitchWrapper>
                {draw?.attributes.isPublished ? 'Publicado' : 'Publicar'}
                <SwitchColor
                  checked={draw?.attributes.isPublished}
                  onChange={handlePublish}
                />
              </SwitchWrapper>
            ) : (
              <SaveButton
                type="button"
                onClick={handleValidate}
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loading iconColor="#ffffff" /> : 'Validar'}
              </SaveButton>
            ))}
        </MainHeader>
        <MainInputContainer>
          <InputLine>
            <SweepstakeInput
              label="Processo susep:"
              style={{
                width: '12rem',
              }}
              maxLength={20}
              maskFunction={maskSusep}
              {...register('susep')}
              error={errors.susep?.message}
            />
            <SweepstakeInput
              label="Número do sorteio:"
              style={{
                width: '6rem',
              }}
              {...register('number')}
              error={errors.number?.message}
            />
          </InputLine>
          <InputLine>
            <SweepstakeInput
              label="Título:"
              style={{
                width: '18rem',
              }}
              placeholder="Insira o título"
              {...register('name')}
              error={errors.name?.message}
            />
            <SweepstakeInput
              label="Data:"
              style={{
                width: '10rem',
              }}
              type="date"
              {...register('drawDate')}
              error={errors.drawDate?.message}
            />
            <SweepstakeInput
              label="Hora:"
              style={{
                width: '8rem',
              }}
              type="time"
              {...register('drawHour')}
              error={errors.drawHour?.message}
            />
          </InputLine>
          <InputLine>
            <SweepstakeInput
              label="Data início vendas:"
              type="date"
              style={{
                width: '10rem',
              }}
              {...register('startDate')}
              error={errors.startDate?.message}
            />
            <SweepstakeInput
              label="Hora:"
              type="time"
              style={{
                width: '8rem',
              }}
              {...register('startHour')}
              error={errors.startHour?.message}
            />
            <SweepstakeInput
              label="Data fim vendas:"
              type="date"
              style={{
                width: '10rem',
              }}
              {...register('endDate')}
              error={errors.endDate?.message}
            />
            <SweepstakeInput
              label="Hora:"
              type="time"
              style={{
                width: '8rem',
              }}
              {...register('endHour')}
              error={errors.endHour?.message}
            />
          </InputLine>
          <SweepstakeInput
            label="Limite de compra de títulos:"
            style={{
              width: '6.25rem',
            }}
            {...register('additionalDataSection.limSale')}
          />
        </MainInputContainer>
      </MainSection>
      <ChanceSection>
        <RetrieveHeader>
          <RetrieveArrowButton
            type="button"
            style={{
              transform: openedSections.includes('chanceSection')
                ? 'rotate(0deg)'
                : 'rotate(-90deg)',
            }}
            onClick={() =>
              setOpenedSections(prev =>
                prev.includes('chanceSection')
                  ? prev.filter(item => item !== 'chanceSection')
                  : [...prev, 'chanceSection'],
              )
            }
          >
            <img src={icon_ArrowSection} alt="" />
          </RetrieveArrowButton>
          Tipo Chance:
          <SelectWrapper>
            <Controller
              control={control}
              name="chanceSection.typeChance"
              render={({ field: { value, onChange } }) => (
                <Select
                  options={drawTypeChanceOptions}
                  value={drawTypeChanceOptions.find(
                    option => option.value === String(value),
                  )}
                  onChange={(e: any) => onChange(Number(e.value))}
                />
              )}
            />
          </SelectWrapper>
        </RetrieveHeader>
        <RetrieveContainer
          isExpanded={openedSections.includes('chanceSection')}
        >
          <ChanceContainer>
            {typeChance && (
              <ChanceLine>
                <SweepstakeInput
                  labelTextStyle={{
                    color: '#0F5CBE',
                  }}
                  label="Faixa de Chance 1:"
                  {...register('chanceSection.chanceInicial01')}
                  error={errors?.chanceSection?.chanceInicial01?.message}
                />
                <SweepstakeInput
                  labelTextStyle={{
                    color: '#0F5CBE',
                  }}
                  label="Final Chance 1:"
                  {...register('chanceSection.chanceFinal01')}
                  error={errors?.chanceSection?.chanceFinal01?.message}
                />
                <SweepstakeInput
                  labelTextStyle={{
                    color: '#0F5CBE',
                  }}
                  label="Intervalo de Chance 1:"
                  {...register(`chanceSection.intervalChance1`)}
                  error={errors.chanceSection?.intervalChance1?.message}
                />
              </ChanceLine>
            )}
            {typeChance >= 2 && (
              <ChanceLine>
                <SweepstakeInput
                  labelTextStyle={{
                    color: '#0F5CBE',
                  }}
                  label="Faixa de Chance 2:"
                  {...register('chanceSection.chanceInicial02')}
                  error={errors?.chanceSection?.chanceInicial02?.message}
                />
                <SweepstakeInput
                  labelTextStyle={{
                    color: '#0F5CBE',
                  }}
                  label="Final Chance 2:"
                  {...register('chanceSection.chanceFinal02')}
                  error={errors?.chanceSection?.chanceFinal02?.message}
                />
                <SweepstakeInput
                  labelTextStyle={{
                    color: '#0F5CBE',
                  }}
                  label="Intervalo de Chance 2:"
                  {...register(`chanceSection.intervalChance2`)}
                  error={errors.chanceSection?.intervalChance2?.message}
                />
              </ChanceLine>
            )}
            {typeChance >= 3 && (
              <ChanceLine>
                <SweepstakeInput
                  labelTextStyle={{
                    color: '#0F5CBE',
                  }}
                  label="Faixa de Chance 3:"
                  {...register('chanceSection.chanceInicial03')}
                  error={errors?.chanceSection?.chanceInicial03?.message}
                />
                <SweepstakeInput
                  labelTextStyle={{
                    color: '#0F5CBE',
                  }}
                  label="Final Chance 3:"
                  {...register('chanceSection.chanceFinal03')}
                  error={errors?.chanceSection?.chanceFinal03?.message}
                />
                <SweepstakeInput
                  labelTextStyle={{
                    color: '#0F5CBE',
                  }}
                  label="Intervalo de Chance 3:"
                  /* {...register(`chanceSection.chances.${index}.range`)}
                    error={
                      errors.chanceSection?.chances?.[index]?.range?.message
                    } */
                />
              </ChanceLine>
            )}
          </ChanceContainer>
        </RetrieveContainer>
      </ChanceSection>
      <AdditionalDataSection>
        <RetrieveHeader>
          <RetrieveArrowButton
            type="button"
            style={{
              transform: openedSections.includes('additionalDataSection')
                ? 'rotate(0deg)'
                : 'rotate(-90deg)',
            }}
            onClick={() =>
              setOpenedSections(prev =>
                prev.includes('additionalDataSection')
                  ? prev.filter(item => item !== 'additionalDataSection')
                  : [...prev, 'additionalDataSection'],
              )
            }
          >
            <img src={icon_ArrowSection} alt="" />
          </RetrieveArrowButton>
          Dados adicionais
        </RetrieveHeader>
        <RetrieveContainer
          isExpanded={openedSections.includes('additionalDataSection')}
        >
          <AdditionalContainer>
            <InputLine>
              <SelectLabel>
                Terá riscadinha Gratuita:
                <SelectWrapper>
                  <Controller
                    control={control}
                    name="additionalDataSection.isScratchCard"
                    render={({ field: { onChange, value } }) => (
                      <Select
                        value={isScratchCardOptions.find(
                          option => option.value === value,
                        )}
                        onChange={(option: any) => onChange(option.value)}
                        options={isScratchCardOptions}
                      />
                    )}
                  />
                </SelectWrapper>
              </SelectLabel>
            </InputLine>
            <SweepstakeInput
              label="Link YouTube (Vídeo publicitário):"
              type="url"
              placeholder="Ex: https://www.youtube.com/watch?v=lvklC85ZvEw"
              {...register('additionalDataSection.lnkYoutube')}
            />
            <SweepstakeInput
              label="Link Sorteio (Sorteio ao Vivo):"
              type="url"
              placeholder="Ex: https://www.youtube.com/watch?v=lvklC85ZvEw"
              {...register('additionalDataSection.lnkYoutubeDraw')}
            />
            <SelectWrapperAdditional>
              <SelectLabel>Tipo de título:</SelectLabel>
              <Controller
                control={control}
                name="additionalDataSection.saleValue"
                render={({ field: { onChange, value } }) => (
                  <Select
                    isMulti
                    options={drawPromoOptions}
                    value={drawPromoOptions?.filter(option =>
                      value?.includes(option.value),
                    )}
                    onChange={(options: any) => {
                      onChange(options.map((option: any) => option.value));
                    }}
                  />
                )}
              />
            </SelectWrapperAdditional>
            <InputLine>
              <SweepstakeInput
                label="Quota Resgate (%):"
                style={{
                  width: '9.375rem',
                }}
                {...register('additionalDataSection.redemptionPercent')}
              />
              <SweepstakeInput
                label="Valor Resgate:"
                style={{
                  width: '9.375rem',
                }}
                {...register('additionalDataSection.redemptionValue')}
              />
              {/* <SweepstakeInput label="Quota Resgate (%):" /> */}
            </InputLine>
            <ImageLine>
              <ImageItem>
                <Image src={previewImageUrl || img_placeholderImg} alt="" />
                <ImageLabelButton>
                  Upload de Imagem{' '}
                  <Controller
                    control={control}
                    name="additionalDataSection.image"
                    render={({ field: { onChange, ref } }) => (
                      <input
                        type="file"
                        accept="image/*"
                        ref={ref}
                        onChange={(e: any) => onChange(e.target.files[0])}
                      />
                    )}
                  />
                </ImageLabelButton>
              </ImageItem>
              <ImageItem>
                <Image
                  src={img_placeholderPDF}
                  alt=""
                  onClick={() => {
                    if (previewPdfUrl) {
                      window.open(previewPdfUrl, '_blank', 'noreferrer');
                    }
                  }}
                  style={{
                    cursor: previewPdfUrl ? 'pointer' : undefined,
                  }}
                />
                <ImageLabelButton>
                  Upload de Cartela{' '}
                  <Controller
                    control={control}
                    name="additionalDataSection.cardImage"
                    render={({ field: { onChange, ref } }) => (
                      <input
                        type="file"
                        ref={ref}
                        accept="application/pdf"
                        onChange={(e: any) => onChange(e.target.files[0])}
                      />
                    )}
                  />
                </ImageLabelButton>
              </ImageItem>
            </ImageLine>
            <ObservationLabel>
              <ObservationTextLabel>Observação:</ObservationTextLabel>
              <ObservationInput
                {...register('additionalDataSection.description')}
              />
            </ObservationLabel>
          </AdditionalContainer>
        </RetrieveContainer>
      </AdditionalDataSection>
      {draw &&
        filteredCategories.map(category => (
          <DrawPremiumSection
            key={category.id}
            draw={draw}
            category={category}
            drawTypePremiums={drawTypePremiums}
            disableEditing={!!disableEditing}
          />
        ))}
      <ButtonFooterContainer>
        <SaveButton disabled={disableEditing}>Salvar</SaveButton>
        <SaveButton
          style={{
            backgroundColor: 'transparent',
            color: '#0F5CBE',
            borderColor: '#0F5CBE',
          }}
          type="button"
          onClick={() => navigate(-1)}
        >
          Cancelar
        </SaveButton>
      </ButtonFooterContainer>
      {handleConfirmModal.isOpen && (
        <ConfirmModal
          message={handleConfirmModal.message}
          onClose={handleConfirmModal.onClose}
          onConfirm={handleConfirmModal.onConfirm}
        />
      )}
    </Content>
  );
};

export default Sweepstake;
