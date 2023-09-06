import { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import api from '../../services/api';
import handleError from '../../services/handleToast';
import { Card, CardTitle, CardValue, CardsContainer, Content } from './styles';

type GetSummaryTitleResponse = {
  total: string;
  titles_sales: string;
  titles_reserved: string;
  titles_available: string;
}[];

interface ITitleSummary {
  total: number;
  titles_sales: number;
  titles_reserved: number;
  titles_available: number;
}

const TitleStock = () => {
  const [titleSummary, setTitleSummary] = useState<ITitleSummary>();

  useEffect(() => {
    getSummaryTitles();
  }, []);

  const getSummaryTitles = async () => {
    try {
      const { data } = await api.get<GetSummaryTitleResponse>(
        '/getSumaryTitles',
      );

      const summary = data?.[0];

      setTitleSummary({
        titles_available: Number(summary?.titles_available || 0),
        total: Number(summary?.total || 0),
        titles_reserved: Number(summary?.titles_reserved || 0),
        titles_sales: Number(summary?.titles_sales || 0),
      });
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Content>
      <PageTitle>Estoque de títulos</PageTitle>

      <CardsContainer>
        <Card>
          <CardTitle>Total títulos</CardTitle>
          <CardValue>
            {(titleSummary?.total || 0).toLocaleString('pt-BR')}
          </CardValue>
        </Card>
        <Card>
          <CardTitle>Títulos reservados</CardTitle>
          <CardValue>
            {(titleSummary?.titles_reserved || 0).toLocaleString('pt-BR')}
          </CardValue>
        </Card>
        <Card>
          <CardTitle>Títulos adquiridos</CardTitle>
          <CardValue>
            {(titleSummary?.titles_sales || 0).toLocaleString('pt-BR')}
          </CardValue>
        </Card>
        <Card>
          <CardTitle>Títulos disponíveis</CardTitle>
          <CardValue>
            {(titleSummary?.titles_available || 0).toLocaleString('pt-BR')}
          </CardValue>
        </Card>
      </CardsContainer>
    </Content>
  );
};

export default TitleStock;
