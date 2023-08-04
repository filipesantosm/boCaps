import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CgCopy } from 'react-icons/cg';
import { IoPencil } from 'react-icons/io5';
import { BsTrash } from 'react-icons/bs';
import Layout from '../../components/Layout/Layout';
import Switch from '../../components/Switch/Switch';
import SwitchColor from '../../components/SwitchColor/SwitchColor';
import {
  AdditionalContainer,
  AdditionalDataSection,
  AdditionalLine,
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
  ButtonFooterContainer,
  ButtonSubmit,
  ChanceContainer,
  ChanceLine,
  ChanceSection,
  Content,
  IconButton,
  IconLink,
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
  SeeMoreButton,
  SelectLabel,
  SelectWrapper,
  SelectWrapperAdditional,
  SwitchWrapper,
  Title,
  TitleContainer,
} from './styles';
import SweepstakeInput from '../../components/SweepstakeInput/SweepstakeInput';
import Select from '../../components/Select/Select';
import BRLMoneyFormater from '../../utils/formaters/BRLMoneyFormater';
import {
  icon_ArrowSection,
  img_placeholderImg,
  img_placeholderPDF,
} from '../../assets';

type FormValues = {
  proccessNumber: number;
  status: string;
  title: string;
  date: string;
  hour: string;
  startDate: string;
  startHour: string;
  endDate: string;
  endHour: string;

  chanceSection: IChanceSection;
  additionalDataSection: IAdditionalData;
  mainAwardsSection: IAwardsSection;
  additionalAwardsSection: IAwardsSection;
  awardsExtraSpingSection: IAwardsSection;
};
interface IChanceSection {
  typeChance: number;
  chances: IChance[];
}
interface IChance {
  from: number;
  to: number;
  range: number;
}
interface IAdditionalData {
  limit: number;
  freeTip: string;
  youtubeLink: string;
  sweepstakeLink: string;
  saleValue: string[];
  shareRescue: string;
  shareValue: string;
  extraSpin: string;
  image: File;
  cardImage: File;
  observation: string;
}
interface IAwardsSection {
  awards: IAwards[];
}
interface IAwards {
  name: string;
  description: string;
  value: number;
  type: string;
  quantity: number;
  observation: string;
}
const Sweepstake = () => {
  const [openedSections, setOpenedSections] = useState<string[]>([]);
  const {
    control,
    formState: { errors },
    register,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      chanceSection: {
        typeChance: 1,
      },
    },
  });
  return (
    <Layout>
      <Content>
        <TitleContainer>
          <Title>Sorteios</Title>
        </TitleContainer>
        <MainSection>
          <MainHeader>
            Dados principais
            <SwitchWrapper>
              <Controller
                control={control}
                name="status"
                render={({ field: { value, onChange } }) => (
                  <>
                    {value === 'active' ? 'Ativo' : 'Inativo'}
                    <SwitchColor
                      checked={value === 'active'}
                      onChange={() =>
                        onChange(value === 'active' ? 'inactive' : 'active')
                      }
                    />
                  </>
                )}
              />
            </SwitchWrapper>
          </MainHeader>
          <MainInputContainer>
            <InputLine>
              <SweepstakeInput
                label="Processo susep:"
                style={{
                  width: '6rem',
                }}
                {...register('proccessNumber')}
                error={errors.proccessNumber?.message}
              />
              <SelectLabel>
                Status:
                <SelectWrapper>
                  <Select
                    options={[
                      {
                        value: '1',
                        label: 'Em andamento',
                      },
                      {
                        value: '2',
                        label: 'Finalizado',
                      },
                    ]}
                  />
                </SelectWrapper>
              </SelectLabel>
            </InputLine>
            <InputLine>
              <SweepstakeInput
                label="Título:"
                style={{
                  width: '18rem',
                }}
                {...register('title')}
                error={errors.title?.message}
              />
              <SweepstakeInput
                label="Data:"
                style={{
                  width: '8rem',
                }}
                {...register('date')}
                error={errors.date?.message}
              />
              <SweepstakeInput
                label="Hora:"
                style={{
                  width: '5rem',
                }}
                {...register('hour')}
                error={errors.hour?.message}
              />
            </InputLine>
            <InputLine>
              <SweepstakeInput
                label="Data início vendas:"
                style={{
                  width: '8.75rem',
                }}
                {...register('startDate')}
                error={errors.startDate?.message}
              />
              <SweepstakeInput
                label="Hora:"
                style={{
                  width: '5rem',
                }}
                {...register('startHour')}
                error={errors.startHour?.message}
              />
              <SweepstakeInput
                label="Data fim vendas:"
                style={{
                  width: '8.75rem',
                }}
                {...register('endDate')}
                error={errors.endDate?.message}
              />
              <SweepstakeInput
                label="Hora:"
                style={{
                  width: '5rem',
                }}
                {...register('endHour')}
                error={errors.endHour?.message}
              />
            </InputLine>
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
                    options={[
                      { value: '1', label: 'Única Chance' },
                      { value: '2', label: 'Dupla Chance' },
                      { value: '3', label: 'Tripla Chance' },
                    ]}
                    value={String(value)}
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
              {new Array(Number(watch('chanceSection.typeChance')) || 0)
                .fill(0)
                .map((_, index) => {
                  const nums = ['I', 'II', 'III'];
                  return (
                    <ChanceLine>
                      <SweepstakeInput
                        labelTextStyle={{
                          color: '#0F5CBE',
                        }}
                        label={`Faixa de Chance ${nums[index]}:`}
                        {...register(`chanceSection.chances.${index}.from`)}
                        error={
                          errors.chanceSection?.chances?.[index]?.from?.message
                        }
                      />
                      <SweepstakeInput
                        labelTextStyle={{
                          color: '#0F5CBE',
                        }}
                        label={`Final Chance ${nums[index]}:`}
                        {...register(`chanceSection.chances.${index}.to`)}
                        error={
                          errors.chanceSection?.chances?.[index]?.to?.message
                        }
                      />
                      <SweepstakeInput
                        labelTextStyle={{
                          color: '#0F5CBE',
                        }}
                        label={`Intervalo de Chance ${nums[index]}:`}
                        {...register(`chanceSection.chances.${index}.range`)}
                        error={
                          errors.chanceSection?.chances?.[index]?.range?.message
                        }
                      />
                    </ChanceLine>
                  );
                })}
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
                <SweepstakeInput
                  label="Limite de usuários:"
                  style={{
                    width: '6.25rem',
                  }}
                />
                <SelectLabel>
                  Terá raspadinha Gratuita:
                  <SelectWrapper>
                    <Select
                      options={[
                        {
                          value: '1',
                          label: 'Sim',
                        },
                        {
                          value: '2',
                          label: 'Não',
                        },
                      ]}
                    />
                  </SelectWrapper>
                </SelectLabel>
              </InputLine>
              <SweepstakeInput label="Link Youtube (Vídeo publicitário):" />
              <SweepstakeInput label="Link Sorteio (Sorteio ao Vivo):" />
              <SelectWrapperAdditional>
                <SelectLabel>Valor promocional:</SelectLabel>
                <Select
                  isMulti
                  options={[
                    { value: '1', label: 'R$ 1,00' },
                    { value: '2', label: 'R$ 2,00' },
                    { value: '3', label: 'R$ 3,00' },
                  ]}
                />
              </SelectWrapperAdditional>
              <InputLine>
                <SweepstakeInput
                  label="Quota Resgate (%):"
                  style={{
                    width: '9.375rem',
                  }}
                />
                <SweepstakeInput
                  label="Valor Resgate:"
                  style={{
                    width: '9.375rem',
                  }}
                />
                <SweepstakeInput label="Quota Resgate (%):" />
              </InputLine>
              <ImageLine>
                <ImageItem>
                  <Image src={img_placeholderImg} alt="" />
                  <ImageLabelButton>
                    Upload de Imagem <input type="file" />
                  </ImageLabelButton>
                </ImageItem>
                <ImageItem>
                  <Image src={img_placeholderPDF} alt="" />
                  <ImageLabelButton>
                    Upload de Cartela <input type="file" />
                  </ImageLabelButton>
                </ImageItem>
              </ImageLine>
              <ObservationLabel>
                <ObservationTextLabel>Observação:</ObservationTextLabel>
                <ObservationInput />
              </ObservationLabel>
            </AdditionalContainer>
          </RetrieveContainer>
        </AdditionalDataSection>
        <AwardSection>
          <RetrieveHeader>
            <RetrieveArrowButton
              type="button"
              style={{
                transform: openedSections.includes('mainAward')
                  ? 'rotate(0deg)'
                  : 'rotate(-90deg)',
              }}
              onClick={() =>
                setOpenedSections(prev =>
                  prev.includes('mainAward')
                    ? prev.filter(item => item !== 'mainAward')
                    : [...prev, 'mainAward'],
                )
              }
            >
              <img src={icon_ArrowSection} alt="" />
            </RetrieveArrowButton>
            Prêmios - Principais
          </RetrieveHeader>
          <RetrieveContainer isExpanded={openedSections.includes('mainAward')}>
            <AwardContainer>
              <AwardInputContainer>
                <AwardLine>
                  <SweepstakeInput label="Título:" />
                  <SweepstakeInput label="Descrição:" />
                  <SweepstakeInput label="Valor:" />
                  <SweepstakeInput label="Tipo de Prêmio:" />
                  <SweepstakeInput label="Quantidade de Prêmios:" />
                </AwardLine>
                <ObservationLabel>
                  <ObservationTextLabel>Observação:</ObservationTextLabel>
                  <ObservationInput />
                </ObservationLabel>
                <ButtonSubmit>Adicionar</ButtonSubmit>
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
                <AwardCellLineTable>
                  <AwardCellTable>Bolão Cap</AwardCellTable>
                  <AwardCellTable>Lorem ipsum</AwardCellTable>
                  <AwardCellTable>
                    {BRLMoneyFormater.format(1235)}
                  </AwardCellTable>
                  <AwardCellTable>Carro quatro portas</AwardCellTable>
                  <AwardCellTable>
                    <SeeMoreButton>Ver mais</SeeMoreButton>
                  </AwardCellTable>
                  <AwardCellTable>
                    <ButtonContainer>
                      <IconLink to="">
                        <IoPencil />
                      </IconLink>
                      <IconButton type="button">
                        <CgCopy />
                      </IconButton>
                      <IconButton type="button">
                        <BsTrash />
                      </IconButton>
                    </ButtonContainer>
                  </AwardCellTable>
                </AwardCellLineTable>
                <AwardCellLineTable>
                  <AwardCellTable>Bolão Cap</AwardCellTable>
                  <AwardCellTable>Lorem ipsum</AwardCellTable>
                  <AwardCellTable>
                    {BRLMoneyFormater.format(1235)}
                  </AwardCellTable>
                  <AwardCellTable>Carro quatro portas</AwardCellTable>
                  <AwardCellTable>
                    <SeeMoreButton>Ver mais</SeeMoreButton>
                  </AwardCellTable>
                  <AwardCellTable>
                    <ButtonContainer>
                      <IconLink to="">
                        <IoPencil />
                      </IconLink>
                      <IconButton type="button">
                        <CgCopy />
                      </IconButton>
                      <IconButton type="button">
                        <BsTrash />
                      </IconButton>
                    </ButtonContainer>
                  </AwardCellTable>
                </AwardCellLineTable>
                <AwardCellLineTable>
                  <AwardCellTable>Bolão Cap</AwardCellTable>
                  <AwardCellTable>Lorem ipsum</AwardCellTable>
                  <AwardCellTable>
                    {BRLMoneyFormater.format(1235)}
                  </AwardCellTable>
                  <AwardCellTable>Carro quatro portas</AwardCellTable>
                  <AwardCellTable>
                    <SeeMoreButton>Ver mais</SeeMoreButton>
                  </AwardCellTable>
                  <AwardCellTable>
                    <ButtonContainer>
                      <IconLink to="">
                        <IoPencil />
                      </IconLink>
                      <IconButton type="button">
                        <CgCopy />
                      </IconButton>
                      <IconButton type="button">
                        <BsTrash />
                      </IconButton>
                    </ButtonContainer>
                  </AwardCellTable>
                </AwardCellLineTable>
                <AwardCellLineTable>
                  <AwardCellTable>Bolão Cap</AwardCellTable>
                  <AwardCellTable>Lorem ipsum</AwardCellTable>
                  <AwardCellTable>
                    {BRLMoneyFormater.format(1235)}
                  </AwardCellTable>
                  <AwardCellTable>Carro quatro portas</AwardCellTable>
                  <AwardCellTable>
                    <SeeMoreButton>Ver mais</SeeMoreButton>
                  </AwardCellTable>
                  <AwardCellTable>
                    <ButtonContainer>
                      <IconLink to="">
                        <IoPencil />
                      </IconLink>
                      <IconButton type="button">
                        <CgCopy />
                      </IconButton>
                      <IconButton type="button">
                        <BsTrash />
                      </IconButton>
                    </ButtonContainer>
                  </AwardCellTable>
                </AwardCellLineTable>
              </AwardTable>
            </AwardContainer>
          </RetrieveContainer>
        </AwardSection>
        <AwardSection>
          <RetrieveHeader>
            <RetrieveArrowButton
              type="button"
              style={{
                transform: openedSections.includes('extraAward')
                  ? 'rotate(0deg)'
                  : 'rotate(-90deg)',
              }}
              onClick={() =>
                setOpenedSections(prev =>
                  prev.includes('extraAward')
                    ? prev.filter(item => item !== 'extraAward')
                    : [...prev, 'extraAward'],
                )
              }
            >
              <img src={icon_ArrowSection} alt="" />
            </RetrieveArrowButton>
            Prêmios - Extras
          </RetrieveHeader>
          <RetrieveContainer isExpanded={openedSections.includes('extraAward')}>
            <AwardContainer>
              <AwardInputContainer>
                <AwardLine>
                  <SweepstakeInput label="Título:" />
                  <SweepstakeInput label="Descrição:" />
                  <SweepstakeInput label="Valor:" />
                  <SweepstakeInput label="Tipo de Prêmio:" />
                  <SweepstakeInput label="Quantidade de Prêmios:" />
                </AwardLine>
                <ObservationLabel>
                  <ObservationTextLabel>Observação:</ObservationTextLabel>
                  <ObservationInput />
                </ObservationLabel>
                <ButtonSubmit>Adicionar</ButtonSubmit>
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
                <AwardCellLineTable>
                  <AwardCellTable>Bolão Cap</AwardCellTable>
                  <AwardCellTable>Lorem ipsum</AwardCellTable>
                  <AwardCellTable>
                    {BRLMoneyFormater.format(1235)}
                  </AwardCellTable>
                  <AwardCellTable>Carro quatro portas</AwardCellTable>
                  <AwardCellTable>
                    <SeeMoreButton>Ver mais</SeeMoreButton>
                  </AwardCellTable>
                  <AwardCellTable>
                    <ButtonContainer>
                      <IconLink to="">
                        <IoPencil />
                      </IconLink>
                      <IconButton type="button">
                        <CgCopy />
                      </IconButton>
                      <IconButton type="button">
                        <BsTrash />
                      </IconButton>
                    </ButtonContainer>
                  </AwardCellTable>
                </AwardCellLineTable>
                <AwardCellLineTable>
                  <AwardCellTable>Bolão Cap</AwardCellTable>
                  <AwardCellTable>Lorem ipsum</AwardCellTable>
                  <AwardCellTable>
                    {BRLMoneyFormater.format(1235)}
                  </AwardCellTable>
                  <AwardCellTable>Carro quatro portas</AwardCellTable>
                  <AwardCellTable>
                    <SeeMoreButton>Ver mais</SeeMoreButton>
                  </AwardCellTable>
                  <AwardCellTable>
                    <ButtonContainer>
                      <IconLink to="">
                        <IoPencil />
                      </IconLink>
                      <IconButton type="button">
                        <CgCopy />
                      </IconButton>
                      <IconButton type="button">
                        <BsTrash />
                      </IconButton>
                    </ButtonContainer>
                  </AwardCellTable>
                </AwardCellLineTable>
                <AwardCellLineTable>
                  <AwardCellTable>Bolão Cap</AwardCellTable>
                  <AwardCellTable>Lorem ipsum</AwardCellTable>
                  <AwardCellTable>
                    {BRLMoneyFormater.format(1235)}
                  </AwardCellTable>
                  <AwardCellTable>Carro quatro portas</AwardCellTable>
                  <AwardCellTable>
                    <SeeMoreButton>Ver mais</SeeMoreButton>
                  </AwardCellTable>
                  <AwardCellTable>
                    <ButtonContainer>
                      <IconLink to="">
                        <IoPencil />
                      </IconLink>
                      <IconButton type="button">
                        <CgCopy />
                      </IconButton>
                      <IconButton type="button">
                        <BsTrash />
                      </IconButton>
                    </ButtonContainer>
                  </AwardCellTable>
                </AwardCellLineTable>
                <AwardCellLineTable>
                  <AwardCellTable>Bolão Cap</AwardCellTable>
                  <AwardCellTable>Lorem ipsum</AwardCellTable>
                  <AwardCellTable>
                    {BRLMoneyFormater.format(1235)}
                  </AwardCellTable>
                  <AwardCellTable>Carro quatro portas</AwardCellTable>
                  <AwardCellTable>
                    <SeeMoreButton>Ver mais</SeeMoreButton>
                  </AwardCellTable>
                  <AwardCellTable>
                    <ButtonContainer>
                      <IconLink to="">
                        <IoPencil />
                      </IconLink>
                      <IconButton type="button">
                        <CgCopy />
                      </IconButton>
                      <IconButton type="button">
                        <BsTrash />
                      </IconButton>
                    </ButtonContainer>
                  </AwardCellTable>
                </AwardCellLineTable>
              </AwardTable>
            </AwardContainer>
          </RetrieveContainer>
        </AwardSection>
        <AwardSection>
          <RetrieveHeader>
            <RetrieveArrowButton
              type="button"
              style={{
                transform: openedSections.includes('extraSpinAward')
                  ? 'rotate(0deg)'
                  : 'rotate(-90deg)',
              }}
              onClick={() =>
                setOpenedSections(prev =>
                  prev.includes('extraSpinAward')
                    ? prev.filter(item => item !== 'extraSpinAward')
                    : [...prev, 'extraSpinAward'],
                )
              }
            >
              <img src={icon_ArrowSection} alt="" />
            </RetrieveArrowButton>
            Prêmios - Giro Extra
          </RetrieveHeader>
          <RetrieveContainer
            isExpanded={openedSections.includes('extraSpinAward')}
          >
            <AwardContainer>
              <AwardInputContainer>
                <AwardLine>
                  <SweepstakeInput label="Título:" />
                  <SweepstakeInput label="Descrição:" />
                  <SweepstakeInput label="Valor:" />
                  <SweepstakeInput label="Tipo de Prêmio:" />
                  <SweepstakeInput label="Quantidade de Prêmios:" />
                </AwardLine>
                <ObservationLabel>
                  <ObservationTextLabel>Observação:</ObservationTextLabel>
                  <ObservationInput />
                </ObservationLabel>
                <ButtonSubmit>Adicionar</ButtonSubmit>
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
                <AwardCellLineTable>
                  <AwardCellTable>Bolão Cap</AwardCellTable>
                  <AwardCellTable>Lorem ipsum</AwardCellTable>
                  <AwardCellTable>
                    {BRLMoneyFormater.format(1235)}
                  </AwardCellTable>
                  <AwardCellTable>Carro quatro portas</AwardCellTable>
                  <AwardCellTable>
                    <SeeMoreButton>Ver mais</SeeMoreButton>
                  </AwardCellTable>
                  <AwardCellTable>
                    <ButtonContainer>
                      <IconLink to="">
                        <IoPencil />
                      </IconLink>
                      <IconButton type="button">
                        <CgCopy />
                      </IconButton>
                      <IconButton type="button">
                        <BsTrash />
                      </IconButton>
                    </ButtonContainer>
                  </AwardCellTable>
                </AwardCellLineTable>
                <AwardCellLineTable>
                  <AwardCellTable>Bolão Cap</AwardCellTable>
                  <AwardCellTable>Lorem ipsum</AwardCellTable>
                  <AwardCellTable>
                    {BRLMoneyFormater.format(1235)}
                  </AwardCellTable>
                  <AwardCellTable>Carro quatro portas</AwardCellTable>
                  <AwardCellTable>
                    <SeeMoreButton>Ver mais</SeeMoreButton>
                  </AwardCellTable>
                  <AwardCellTable>
                    <ButtonContainer>
                      <IconLink to="">
                        <IoPencil />
                      </IconLink>
                      <IconButton type="button">
                        <CgCopy />
                      </IconButton>
                      <IconButton type="button">
                        <BsTrash />
                      </IconButton>
                    </ButtonContainer>
                  </AwardCellTable>
                </AwardCellLineTable>
                <AwardCellLineTable>
                  <AwardCellTable>Bolão Cap</AwardCellTable>
                  <AwardCellTable>Lorem ipsum</AwardCellTable>
                  <AwardCellTable>
                    {BRLMoneyFormater.format(1235)}
                  </AwardCellTable>
                  <AwardCellTable>Carro quatro portas</AwardCellTable>
                  <AwardCellTable>
                    <SeeMoreButton>Ver mais</SeeMoreButton>
                  </AwardCellTable>
                  <AwardCellTable>
                    <ButtonContainer>
                      <IconLink to="">
                        <IoPencil />
                      </IconLink>
                      <IconButton type="button">
                        <CgCopy />
                      </IconButton>
                      <IconButton type="button">
                        <BsTrash />
                      </IconButton>
                    </ButtonContainer>
                  </AwardCellTable>
                </AwardCellLineTable>
                <AwardCellLineTable>
                  <AwardCellTable>Bolão Cap</AwardCellTable>
                  <AwardCellTable>Lorem ipsum</AwardCellTable>
                  <AwardCellTable>
                    {BRLMoneyFormater.format(1235)}
                  </AwardCellTable>
                  <AwardCellTable>Carro quatro portas</AwardCellTable>
                  <AwardCellTable>
                    <SeeMoreButton>Ver mais</SeeMoreButton>
                  </AwardCellTable>
                  <AwardCellTable>
                    <ButtonContainer>
                      <IconLink to="">
                        <IoPencil />
                      </IconLink>
                      <IconButton type="button">
                        <CgCopy />
                      </IconButton>
                      <IconButton type="button">
                        <BsTrash />
                      </IconButton>
                    </ButtonContainer>
                  </AwardCellTable>
                </AwardCellLineTable>
              </AwardTable>
            </AwardContainer>
          </RetrieveContainer>
        </AwardSection>
        <ButtonFooterContainer>
          <SaveButton>Salvar</SaveButton>
          <SaveButton
            style={{
              backgroundColor: 'transparent',
              color: '#0F5CBE',
              borderColor: '#0F5CBE',
            }}
          >
            Cancelar
          </SaveButton>
        </ButtonFooterContainer>
      </Content>
    </Layout>
  );
};

export default Sweepstake;
