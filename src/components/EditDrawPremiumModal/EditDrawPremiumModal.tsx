import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { DrawPremium } from '../../interfaces/Draw';
import { IDrawPremiumForm } from '../../interfaces/SweepstakeForm';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import { maskCurrency, unmaskCurrency } from '../../utils/mask';
import Select from '../Select/Select';
import SweepstakeInput from '../SweepstakeInput/SweepstakeInput';
import {
  ButtonSubmit,
  ButtonsContainer,
  Container,
  Content,
  Form,
  ObservationInput,
  ObservationLabel,
  ObservationTextLabel,
  SelectLabel,
  SelectWrapper,
  Title,
} from './styles';
import BRLMoneyFormater from '../../utils/formaters/BRLMoneyFormater';

interface Option {
  label: string;
  value: string;
}

interface Props {
  drawPremium: DrawPremium;
  drawTypePremiumOptions: Option[];
  onClose: () => void;
  onSuccessfulEdit: () => void;
}

const EditDrawPremiumModal = ({
  drawPremium,
  drawTypePremiumOptions,
  onClose,
  onSuccessfulEdit,
}: Props) => {
  const { register, handleSubmit, control } = useForm<IDrawPremiumForm>({
    defaultValues: {
      description: drawPremium.attributes.description,
      draw_type_premium: String(
        drawPremium.attributes.draw_type_premium.data.id,
      ),
      title: drawPremium.attributes.title,
      value: BRLMoneyFormater.format(drawPremium.attributes.value),
    },
  });

  const onSubmit: SubmitHandler<IDrawPremiumForm> = async form => {
    try {
      await api.put(`/draw-premiums/${drawPremium.id}`, {
        data: {
          title: form.title,
          description: form.description,
          value: unmaskCurrency(form.value),
          draw_type_premium: {
            id: Number(form.draw_type_premium),
          },
        },
      });
      handleSuccess('Prêmio atualizado com sucesso!');
      onSuccessfulEdit();
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Container>
      <Content>
        <Title>Editar prêmio - {drawPremium.attributes.title}</Title>
        <Form>
          <SweepstakeInput
            label="Título"
            placeholder="Insira o título"
            {...register('title')}
          />
          <SweepstakeInput
            label="Valor"
            placeholder="Insira o valor"
            maskFunction={maskCurrency}
            {...register('value')}
          />
          <SelectWrapper>
            <SelectLabel>Tipo do prêmio: </SelectLabel>
            <Controller
              control={control}
              name="draw_type_premium"
              render={({ field: { onChange, value } }) => (
                <Select
                  options={drawTypePremiumOptions}
                  onChange={(option: any) => onChange(option.value)}
                  value={
                    drawTypePremiumOptions.find(
                      option => option.value === value,
                    ) || null
                  }
                />
              )}
            />
          </SelectWrapper>
          <ObservationLabel>
            <ObservationTextLabel>Observação:</ObservationTextLabel>
            <ObservationInput
              placeholder="Insira a observação"
              {...register('description')}
            />
          </ObservationLabel>
          <ButtonsContainer>
            <ButtonSubmit
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: 'transparent',
                color: '#0F5CBE',
                borderColor: '#0F5CBE',
              }}
            >
              Cancelar
            </ButtonSubmit>
            <ButtonSubmit type="button" onClick={handleSubmit(onSubmit)}>
              Salvar
            </ButtonSubmit>
          </ButtonsContainer>
        </Form>
      </Content>
    </Container>
  );
};

export default EditDrawPremiumModal;
