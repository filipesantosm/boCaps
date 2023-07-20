import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import Layout from '../../components/Layout/Layout';
import {
  ChartTitle,
  ChartWrapper,
  Container,
  Content,
  Table,
  TableData,
  TableHeader,
  TableWrapper,
  Title,
} from './styles';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['P0', 'P1', 'P2', 'Y'],
  datasets: [
    {
      label: 'Quantidade',
      data: [27713, 4105, 4809, 248705, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <Layout>
      <Container>
        <Title>Home</Title>
        <Content>
          {/* <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <TableHeader>Cadastro Completo</TableHeader>
                  <TableHeader>Quantidade</TableHeader>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <TableData>P0</TableData>
                  <TableData>{(27713).toLocaleString('pt-BR')}</TableData>
                </tr>
                <tr>
                  <TableData>P1</TableData>
                  <TableData>{(4105).toLocaleString('pt-BR')}</TableData>
                </tr>
                <tr>
                  <TableData>P2</TableData>
                  <TableData>{(4809).toLocaleString('pt-BR')}</TableData>
                </tr>
                <tr>
                  <TableData>Y</TableData>
                  <TableData>{(248705).toLocaleString('pt-BR')}</TableData>
                </tr>
              </tbody>
            </Table>
          </TableWrapper> */}
          <ChartWrapper>
            <ChartTitle>Resumo cadastros</ChartTitle>
            <Pie
              data={data}
              options={{
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }}
            />
          </ChartWrapper>
        </Content>
      </Container>
    </Layout>
  );
};

export default Dashboard;
