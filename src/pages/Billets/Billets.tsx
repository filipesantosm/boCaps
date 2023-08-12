import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import SmallPagination from '../../components/Pagination/Pagination';
import { PaginatedResponse } from '../../interfaces/Paginated';
import { IUserPayment } from '../../interfaces/UserPayments';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import { formatDateString } from '../../utils/formatDateString';
import {
  Button,
  ButtonsContainer,
  Content,
  DataText,
  PageHeader,
  SearchDivider,
  SearchIcon,
  SearchInput,
  TableBody,
  TableData,
  TableHeaderData,
  TableHeaderRow,
  TableRow,
  Title,
} from './styles';

interface GetBilletParams {
  search: string;
  page: number;
}

const Billets = () => {
  const [search, setSearch] = useState('');
  const [userPayments, setUserPayments] = useState<IUserPayment[]>([]);
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);
  const [payingBilletNumber, setPayingBilletNumber] = useState('');

  const getBillets = async (params: GetBilletParams) => {
    if (!params.search) {
      handleError('Busque pelo ID do usuário');
      return;
    }

    try {
      const { data } = await api.get<PaginatedResponse<IUserPayment>>(
        '/user-payments',
        {
          params: {
            'filters[active]': true,
            'filters[payment_type][id][$eq]': 2,
            'filters[user][id][$eq]': params.search,
            sort: 'createdAt:desc',
            'pagination[page]': page,
            'pagination[pageSize]': 10,
          },
        },
      );

      setMaximumPage(data.meta.pagination.pageCount);
      setUserPayments(data.data);
    } catch (error) {
      handleError(error);
    }
  };

  const handlePayBillet = async (code: string, userId: number) => {
    setPayingBilletNumber(code);

    try {
      await api.post('/aprovedBillet', {
        data: {
          number: code,
          user: userId,
        },
      });

      handleSuccess('Boleto pago com sucesso!');
    } catch (error) {
      handleError(error);
    } finally {
      setPayingBilletNumber('');
    }
  };

  return (
    <Layout>
      <Content>
        <Title>Boletos</Title>
        <PageHeader>
          <SearchDivider
            onSubmit={e => {
              e.preventDefault();
              getBillets({ page: 1, search });
            }}
          >
            <SearchIcon />
            <SearchInput
              type="text"
              id="search"
              name="search"
              required
              placeholder="Buscar pelo ID do usuário"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <Button>Pesquisar</Button>
          </SearchDivider>
        </PageHeader>

        <TableHeaderRow>
          <TableHeaderData>Número do boleto</TableHeaderData>
          <TableHeaderData>Data de compra</TableHeaderData>
          <TableHeaderData>Ações</TableHeaderData>
        </TableHeaderRow>

        <TableBody>
          {userPayments.map(userPayment => (
            <TableRow key={userPayment.id}>
              <TableData>
                <DataText>{userPayment.attributes.ourNumber}</DataText>
              </TableData>
              <TableData>
                <DataText>
                  {formatDateString(
                    userPayment.attributes.createdAt,
                    'dd/MM/yyyy HH:mm',
                  )}
                </DataText>
              </TableData>
              <TableData>
                <ButtonsContainer>
                  <Button
                    style={{
                      backgroundColor: 'transparent',
                      color: '#0F5CBE',
                      border: '1px solid #0F5CBE',
                    }}
                    type="button"
                    onClick={() => {
                      if (userPayment.attributes.ourNumber) {
                        navigator.clipboard.writeText(
                          userPayment.attributes.ourNumber,
                        );
                        handleSuccess('Código copiado com sucesso!');
                      }
                    }}
                  >
                    Copiar código
                  </Button>
                  <Button
                    type="button"
                    onClick={() =>
                      handlePayBillet(
                        userPayment.attributes.ourNumber,
                        userPayment.attributes.userApproved,
                      )
                    }
                    disabled={!!payingBilletNumber}
                  >
                    {payingBilletNumber === userPayment.attributes.ourNumber ? (
                      <Loading iconColor="#ffffff" iconFontSize="1.5rem" />
                    ) : (
                      'Pagar boleto'
                    )}
                  </Button>
                </ButtonsContainer>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
        <SmallPagination
          total={maximumPage}
          currentPage={page}
          handleChange={(_, newPage) => setPage(newPage)}
        />
      </Content>
    </Layout>
  );
};

export default Billets;
