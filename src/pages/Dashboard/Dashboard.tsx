import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Select from '../../components/Select/Select';
import { useDrawOptions } from '../../hooks/useDrawOptions';
import BRLMoneyFormater from '../../utils/formaters/BRLMoneyFormater';
import {
  ChartContainer,
  ChartInfoColumn,
  ChartTitle,
  ChartWrapper,
  ChartsSection,
  Container,
  Content,
  FilledButton,
  FilterField,
  FilterInput,
  FilterLabel,
  FilterRow,
  FilterSection,
  Title,
  TotalValue,
} from './styles';
import { generateData, generateTitleData, monthOptions } from './utils';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Option {
  value: string | number;
  label: string;
}

interface IDashboardForm {
  draw: Option;
  origin: Option;
  month: Option;
  initialDate: string;
  finalDate: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { register, control } = useForm<IDashboardForm>();

  const { drawOptions } = useDrawOptions();

  return (
    <Container>
      <Title>Dashboard</Title>
      <Content>
        <FilterSection>
          <FilterRow
            style={{
              justifyContent: 'flex-end',
            }}
          >
            <FilledButton
              type="button"
              style={{
                width: '15%',
              }}
            >
              Exportar dados
            </FilledButton>
            <FilledButton
              type="button"
              style={{
                width: '15%',
              }}
              onClick={() => navigate('/transactions')}
            >
              Ir para transações
            </FilledButton>
          </FilterRow>
          <FilterRow>
            <FilterField>
              <FilterLabel>Sorteio</FilterLabel>
              <Controller
                control={control}
                name="draw"
                render={({ field: { onChange, value } }) => (
                  <Select
                    options={drawOptions}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </FilterField>
            <FilterField>
              <FilterLabel>Canal de vendas</FilterLabel>
              <Controller
                control={control}
                name="origin"
                render={({ field: { onChange, value } }) => (
                  <Select
                    options={[
                      {
                        value: 'Web',
                        label: 'Web',
                      },
                      {
                        value: 'app',
                        label: 'App',
                      },
                    ]}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </FilterField>
            <FilterField>
              <FilterLabel>Mês</FilterLabel>
              <Controller
                control={control}
                name="month"
                render={({ field: { onChange, value } }) => (
                  <Select
                    options={monthOptions}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </FilterField>
            <FilterField>
              <FilterLabel>Data inicial</FilterLabel>
              <FilterInput type="date" {...register('initialDate')} />
            </FilterField>
            <FilterField>
              <FilterLabel>Data final</FilterLabel>
              <FilterInput type="date" {...register('finalDate')} />
            </FilterField>
            <FilledButton>Aplicar filtros</FilledButton>
          </FilterRow>
        </FilterSection>
        <ChartsSection>
          <ChartContainer>
            <ChartWrapper>
              <Pie
                data={generateData()}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom',
                      display: false,
                    },
                  },
                }}
              />
            </ChartWrapper>
            <ChartInfoColumn>
              <ChartTitle>Total de vendas</ChartTitle>
              <TotalValue>{BRLMoneyFormater.format(10000)}</TotalValue>
            </ChartInfoColumn>
          </ChartContainer>
          <ChartContainer>
            <ChartWrapper>
              <Pie
                data={generateData()}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom',
                      display: false,
                    },
                  },
                  responsive: true,
                }}
              />
            </ChartWrapper>
            <ChartInfoColumn>
              <ChartTitle>Quantidade compras</ChartTitle>
              <TotalValue>{(1000).toLocaleString('pt-BR')}</TotalValue>
            </ChartInfoColumn>
          </ChartContainer>
          <ChartContainer>
            <ChartWrapper>
              <Pie
                data={generateData()}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom',
                      display: false,
                    },
                  },
                  responsive: true,
                }}
              />
            </ChartWrapper>
            <ChartInfoColumn>
              <ChartTitle>Ticket médio</ChartTitle>
              <TotalValue>{BRLMoneyFormater.format(20)}</TotalValue>
            </ChartInfoColumn>
          </ChartContainer>
          <ChartContainer>
            <ChartWrapper>
              <Pie
                data={generateTitleData()}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom',
                      display: false,
                    },
                  },
                  responsive: true,
                }}
              />
            </ChartWrapper>
            <ChartInfoColumn>
              <ChartTitle>Total de títulos</ChartTitle>
              <TotalValue>{(1000).toLocaleString('pt-BR')}</TotalValue>
            </ChartInfoColumn>
          </ChartContainer>
          <ChartContainer>
            <ChartWrapper>
              <Pie
                data={generateTitleData()}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom',
                      display: false,
                    },
                  },
                  responsive: true,
                }}
              />
            </ChartWrapper>
            <ChartInfoColumn>
              <ChartTitle>Títulos por compra</ChartTitle>
              <TotalValue>{(2).toLocaleString('pt-BR')}</TotalValue>
            </ChartInfoColumn>
          </ChartContainer>
          <ChartContainer>
            <ChartWrapper>
              <Pie
                data={generateTitleData()}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom',
                      display: false,
                    },
                  },
                  responsive: true,
                }}
              />
            </ChartWrapper>
            <ChartInfoColumn>
              <ChartTitle>Ticket médio por título</ChartTitle>
              <TotalValue>{(10).toLocaleString('pt-BR')}</TotalValue>
            </ChartInfoColumn>
          </ChartContainer>
        </ChartsSection>
      </Content>
    </Container>
  );
};

export default Dashboard;
