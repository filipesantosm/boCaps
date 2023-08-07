import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { BsTrash } from 'react-icons/bs';
import { CgCopy } from 'react-icons/cg';
import { IoPencil } from 'react-icons/io5';
import { icon_ArrowSection } from '../../assets';
import {
  DrawPremium,
  DrawPremiumCategory,
  DrawTypePremium,
  IDraw,
} from '../../interfaces/Draw';
import { PaginatedResponse } from '../../interfaces/Paginated';
import { IDrawPremiumForm } from '../../interfaces/SweepstakeForm';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import BRLMoneyFormater from '../../utils/formaters/BRLMoneyFormater';
import { maskCurrency, unmaskCurrency } from '../../utils/mask';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import EditDrawPremiumModal from '../EditDrawPremiumModal/EditDrawPremiumModal';
import Select from '../Select/Select';
import SweepstakeInput from '../SweepstakeInput/SweepstakeInput';
import {
  AwardCellLineTable,
  AwardCellTable,
  AwardContainer,
  AwardHeadLineTable,
  AwardHeadTable,
  AwardInputContainer,
  AwardLine,
  AwardSection,
  AwardTable,
  ButtonContainer,
  ButtonSubmit,
  IconButton,
  ObservationInput,
  ObservationLabel,
  ObservationTextLabel,
  RetrieveArrowButton,
  RetrieveContainer,
  RetrieveHeader,
  SeeMoreButton,
  SelectLabel,
  SelectWrapper,
} from './styles';

interface Props {
  draw?: IDraw;
  category: DrawPremiumCategory;
  drawTypePremiums: DrawTypePremium[];
}

const DrawPremiumSection = ({ draw, drawTypePremiums, category }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [drawPremiums, setDrawPremiums] = useState<DrawPremium[]>([]);
  const [editingDrawPremium, setEditingDrawPremium] = useState<DrawPremium>();
  const [drawPremiumIdToDelete, setDrawPremiumIdToDelete] = useState(0);

  const { control, register, handleSubmit, reset } =
    useForm<IDrawPremiumForm>();

  useEffect(() => {
    if (isExpanded) {
      getDrawPremiums();
    }
  }, [isExpanded]);

  const getDrawPremiums = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<DrawPremium>>(
        '/draw-premiums',
        {
          params: {
            'filters[draw][id][$eq]': draw?.id,
            'filters[category][id][$eq]': category.id,
            'filters[active][$eq]': true,
            populate: 'draw_type_premium',
            'pagination[pageSize]': 100,
          },
        },
      );

      setDrawPremiums(data.data);
    } catch (error) {
      handleError(error);
    }
  };

  const onSubmit: SubmitHandler<IDrawPremiumForm> = async form => {
    try {
      if (!draw) {
        handleError('Salve o sorteio antes de criar um prêmio');
        return;
      }

      const payload = {
        data: {
          value: unmaskCurrency(form.value),
          description: form.description,
          title: form.title,
          draw_type_premium: Number(form.draw_type_premium),
          category: category.id,
          draw: draw.id,
          active: true,
          quantity: Number(form.quantity),
          number: (drawPremiums?.length || 0) + 1,
        },
      };

      await api.post('/insertPremiuns', payload);

      getDrawPremiums();
      reset();
    } catch (error) {
      handleError(error);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await api.put(`/draw-premiums/${drawPremiumIdToDelete}`, {
        data: {
          active: false,
        },
      });

      getDrawPremiums();
      setDrawPremiumIdToDelete(0);
      handleSuccess('Prêmio apagado com sucesso!');
    } catch (error) {
      handleError(error);
    }
  };

  const drawTypePremiumOptions = drawTypePremiums.map(typePremium => ({
    label: typePremium.attributes.name,
    value: typePremium.id.toString(),
  }));

  return (
    <AwardSection>
      <RetrieveHeader>
        <RetrieveArrowButton
          type="button"
          style={{
            transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
          }}
          onClick={() => setIsExpanded(prev => !prev)}
        >
          <img src={icon_ArrowSection} alt="" />
        </RetrieveArrowButton>
        Prêmios - {category.attributes.name}
      </RetrieveHeader>
      <RetrieveContainer isExpanded={isExpanded}>
        <AwardContainer>
          <AwardInputContainer>
            <AwardLine>
              <SweepstakeInput
                label="Título:"
                placeholder="Insira o título"
                {...register('title')}
              />
              {/* <SweepstakeInput
                label="Descrição:"
                placeholder="Insira a descrição"
              /> */}
              <SweepstakeInput
                label="Valor:"
                placeholder="Insira o valor"
                maskFunction={maskCurrency}
                {...register('value')}
              />
              <SelectWrapper>
                <SelectLabel>Tipo de Prêmio: </SelectLabel>
                <Controller
                  control={control}
                  name="draw_type_premium"
                  render={({ field: { value, onChange } }) => (
                    <Select
                      options={drawTypePremiumOptions}
                      value={
                        drawTypePremiumOptions.find(
                          option => option.value === value,
                        ) || null
                      }
                      onChange={(option: any) => onChange(option.value)}
                    />
                  )}
                />
              </SelectWrapper>
              <SweepstakeInput
                label="Quantidade de Prêmios:"
                type="number"
                min={1}
                step={1}
                {...register('quantity')}
              />
            </AwardLine>
            <ObservationLabel>
              <ObservationTextLabel>Observação:</ObservationTextLabel>
              <ObservationInput
                placeholder="Insira a observação"
                {...register('description')}
              />
            </ObservationLabel>
            <ButtonSubmit type="button" onClick={handleSubmit(onSubmit)}>
              Adicionar
            </ButtonSubmit>
          </AwardInputContainer>
          <AwardTable>
            <AwardHeadLineTable>
              <AwardHeadTable>Título</AwardHeadTable>
              <AwardHeadTable>Descrição</AwardHeadTable>
              <AwardHeadTable>Valor</AwardHeadTable>
              <AwardHeadTable>Tipo de prêmio</AwardHeadTable>
              <AwardHeadTable>Observação</AwardHeadTable>
              <AwardHeadTable>Ações</AwardHeadTable>
            </AwardHeadLineTable>
            {drawPremiums?.map(premium => (
              <AwardCellLineTable key={premium.id}>
                <AwardCellTable>{premium.attributes.title}</AwardCellTable>
                <AwardCellTable>
                  {premium.attributes.description}
                </AwardCellTable>
                <AwardCellTable>
                  {BRLMoneyFormater.format(premium.attributes.value)}
                </AwardCellTable>
                <AwardCellTable>
                  {premium.attributes.draw_type_premium.data.attributes.name}
                </AwardCellTable>
                <AwardCellTable>
                  <SeeMoreButton>Ver mais</SeeMoreButton>
                </AwardCellTable>
                <AwardCellTable>
                  <ButtonContainer>
                    <IconButton
                      type="button"
                      onClick={() => setEditingDrawPremium(premium)}
                    >
                      <IoPencil />
                    </IconButton>
                    <IconButton type="button" title="Copiar prêmio">
                      <CgCopy />
                    </IconButton>
                    <IconButton
                      type="button"
                      onClick={() => setDrawPremiumIdToDelete(premium.id)}
                      title="Apagar prêmio"
                    >
                      <BsTrash />
                    </IconButton>
                  </ButtonContainer>
                </AwardCellTable>
              </AwardCellLineTable>
            ))}
          </AwardTable>
        </AwardContainer>
      </RetrieveContainer>
      {!!drawPremiumIdToDelete && (
        <ConfirmModal
          message="Tem certeza que deseja apagar este prêmio?"
          onConfirm={handleConfirmDelete}
          onClose={() => setDrawPremiumIdToDelete(0)}
        />
      )}
      {editingDrawPremium && (
        <EditDrawPremiumModal
          drawPremium={editingDrawPremium}
          drawTypePremiumOptions={drawTypePremiumOptions}
          onClose={() => setEditingDrawPremium(undefined)}
          onSuccessfulEdit={() => {
            getDrawPremiums();
            setEditingDrawPremium(undefined);
          }}
        />
      )}
    </AwardSection>
  );
};

export default DrawPremiumSection;