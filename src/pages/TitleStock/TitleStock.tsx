import PageTitle from '../../components/PageTitle/PageTitle';
import { Card, CardTitle, CardValue, CardsContainer, Content } from './styles';

const TitleStock = () => {
  return (
    <Content>
      <PageTitle>Estoque de títulos</PageTitle>

      <CardsContainer>
        <Card>
          <CardTitle>Total títulos</CardTitle>
          <CardValue>{(10000).toLocaleString('pt-BR')}</CardValue>
        </Card>
        <Card>
          <CardTitle>Títulos reservados</CardTitle>
          <CardValue>{(1250).toLocaleString('pt-BR')}</CardValue>
        </Card>
        <Card>
          <CardTitle>Títulos adquiridos</CardTitle>
          <CardValue>{(3750).toLocaleString('pt-BR')}</CardValue>
        </Card>
        <Card>
          <CardTitle>Títulos disponíveis</CardTitle>
          <CardValue>{(5000).toLocaleString('pt-BR')}</CardValue>
        </Card>
      </CardsContainer>
    </Content>
  );
};

export default TitleStock;
