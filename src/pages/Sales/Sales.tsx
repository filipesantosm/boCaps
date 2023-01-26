import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import SmallPagination from '../../components/Pagination/Pagination';
import {
  CompText,
  Container,
  Content,
  GreenFeeComp,
  MainForm,
  ManageButton,
  SearchDivider,
  SearchIcon,
  SearchInput,
  Table,
  TableHeader,
  TableHeaderTitle,
  Title,
  TitleDivider,
  TitleIcon,
} from './styles';

const Sales = () => {
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  // mock
  const sales = [
    {
      id: 1,
      name: 'Atenas Golf Club',
    },
    {
      id: 2,
      name: 'Country Golf Club',
    },
    {
      id: 3,
      name: 'Clube Golf Diamantina',
    },
    {
      id: 4,
      name: 'Jundiaí Club',
    },
    {
      id: 5,
      name: 'K Golf Club',
    },
    {
      id: 6,
      name: 'L Golf Club',
    },
    {
      id: 7,
      name: 'M Golf Club',
    },
    {
      id: 8,
      name: 'N Golf Club',
    },
    {
      id: 9,
      name: 'O Golf Club',
    },
    {
      id: 10,
      name: 'P Golf Club',
    },
    {
      id: 11,
      name: 'Q Golf Club',
    },
    {
      id: 12,
      name: 'R Golf Club',
    },
    {
      id: 13,
      name: 'S Golf Club',
    },
    {
      id: 14,
      name: 'T Golf Club',
    },
  ];

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm>
          <TitleDivider>
            <TitleIcon />

            <Title>Promoções</Title>
          </TitleDivider>

          <ManageButton type="button" onClick={() => navigate('/sales/manage')}>
            Gerenciar promoções padrão
          </ManageButton>

          <TableHeader>
            <TableHeaderTitle style={{ marginRight: '2.375rem' }}>
              N°
            </TableHeaderTitle>

            <TableHeaderTitle style={{ marginRight: '1.625rem' }}>
              Nome
            </TableHeaderTitle>

            <SearchDivider>
              <SearchIcon />

              <SearchInput
                type="text"
                id="search"
                name="search"
                placeholder="Buscar promoção"
              />
            </SearchDivider>
          </TableHeader>

          <Table>
            {sales.length > 0 &&
              sales.map(sale => (
                <GreenFeeComp key={sale.id}>
                  <CompText style={{ width: '4.375rem' }}>{sale.id}</CompText>

                  <CompText>{sale.name}</CompText>
                </GreenFeeComp>
              ))}
          </Table>

          <SmallPagination
            total={5}
            currentPage={page}
            handleChange={() => setPage(page + 1)}
          />
        </MainForm>
      </Content>
    </Container>
  );
};

export default Sales;
