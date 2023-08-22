import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { Controller, useForm } from 'react-hook-form';
import Layout from '../../components/Layout/Layout';
import Select from '../../components/Select/Select';
import { useDrawOptions } from '../../hooks/useDrawOptions';
import {
  ChartContainer,
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
} from './styles';
import { data, monthOptions } from './utils';

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
  const { register, control } = useForm<IDashboardForm>();

  const { drawOptions } = useDrawOptions();

  return (
    <Layout>
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
              <ChartTitle>Total de vendas</ChartTitle>
              <ChartWrapper>
                <Pie
                  data={data}
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
            </ChartContainer>
            <ChartContainer>
              <ChartTitle>Quantidade compras</ChartTitle>
              <ChartWrapper>
                <Pie
                  data={data}
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
            </ChartContainer>
            <ChartContainer>
              <ChartTitle>Ticket médio</ChartTitle>
              <ChartWrapper>
                <Pie
                  data={data}
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
            </ChartContainer>
            <ChartContainer>
              <ChartTitle>Total de títulos</ChartTitle>
              <ChartWrapper>
                <Pie
                  data={data}
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
            </ChartContainer>
            <ChartContainer>
              <ChartTitle>Títulos por compra</ChartTitle>
              <ChartWrapper>
                <Pie
                  data={data}
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
            </ChartContainer>
            <ChartContainer>
              <ChartTitle>Ticket médio por título</ChartTitle>
              <ChartWrapper>
                <Pie
                  data={data}
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
            </ChartContainer>
          </ChartsSection>
        </Content>
      </Container>
    </Layout>
  );
};

export default Dashboard;
