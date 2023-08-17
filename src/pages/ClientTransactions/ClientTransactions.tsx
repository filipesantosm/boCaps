/* eslint-disable react/no-array-index-key */
import { format, parseISO } from 'date-fns';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import SmallPagination from '../../components/Pagination/Pagination';
import SalesGraph from '../../components/SalesGraph/SalesGraph';
import TransactionDetails from '../../components/TransactionDetails/TransactionDetails';
import BRLMoneyFormater from '../../utils/formaters/BRLMoneyFormater';
import {
  BackIcon,
  ChartLabel,
  ChartWrapper,
  ClientInfoRow,
  ClientInfoText,
  ClientInfoTitle,
  ClientInformationColumn,
  Content,
  DataText,
  IconTag,
  TableBody,
  TableData,
  TableHeaderData,
  TableHeaderRow,
  TableRow,
  TextButton,
  Title,
  TopSection,
} from './styles';

const ClientTransactions = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>();
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);

  return (
    <Layout>
      <Content>
        <TopSection>
          <ClientInformationColumn>
            <Title>
              <IconTag onClick={() => navigate('/transactions')}>
                <BackIcon />
              </IconTag>
              Transações por cliente
            </Title>
            <ClientInfoRow>
              <ClientInfoTitle>Cliente</ClientInfoTitle>
              <ClientInfoText>Nome Sobrenome</ClientInfoText>
            </ClientInfoRow>
            <ClientInfoRow>
              <ClientInfoTitle>CPF</ClientInfoTitle>
              <ClientInfoText>123.456.789-00</ClientInfoText>
            </ClientInfoRow>
            <ClientInfoRow>
              <ClientInfoTitle>Telefone</ClientInfoTitle>
              <ClientInfoText>(11) 99999-9999</ClientInfoText>
            </ClientInfoRow>
            <ClientInfoRow>
              <ClientInfoTitle>E-mail</ClientInfoTitle>
              <ClientInfoText>email@email.com</ClientInfoText>
            </ClientInfoRow>
            <ClientInfoRow>
              <ClientInfoTitle>Endereço</ClientInfoTitle>
              <ClientInfoText>
                Rua Teste, Nº 123, 99999-999, Bairro, São Paulo - SP
              </ClientInfoText>
            </ClientInfoRow>
          </ClientInformationColumn>
          <ChartWrapper>
            <ChartLabel>Compras por sorteio</ChartLabel>
            <SalesGraph />
          </ChartWrapper>
        </TopSection>
        <TableHeaderRow>
          <TableHeaderData>Data</TableHeaderData>
          <TableHeaderData>Valor</TableHeaderData>
          <TableHeaderData>Data confirmação</TableHeaderData>
          <TableHeaderData>Meio de pagamento</TableHeaderData>
          <TableHeaderData>Origem</TableHeaderData>
          <TableHeaderData>Status</TableHeaderData>
          <TableHeaderData>Ações</TableHeaderData>
        </TableHeaderRow>

        <TableBody>
          {Array.from({ length: 12 }).map((_, index) => (
            <TableRow key={index}>
              <TableData>
                <DataText>
                  {format(parseISO('2023-08-15'), 'dd/MM/yyyy')}
                </DataText>
              </TableData>
              <TableData>
                <DataText>{BRLMoneyFormater.format(45)}</DataText>
              </TableData>
              <TableData>
                <DataText>
                  {format(parseISO('2023-08-15'), 'dd/MM/yyyy')}
                </DataText>
              </TableData>
              <TableData>
                <DataText>Pix</DataText>
              </TableData>
              <TableData>
                <DataText>Web</DataText>
              </TableData>
              <TableData>
                <DataText>Concluído</DataText>
              </TableData>
              <TableData>
                <TextButton
                  type="button"
                  onClick={() => setSelectedTransaction({})}
                >
                  Ver mais
                </TextButton>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
        <SmallPagination
          currentPage={page}
          total={maximumPage}
          handleChange={(_, newPage) => setPage(newPage)}
        />
        {!!selectedTransaction && (
          <TransactionDetails
            onClose={() => setSelectedTransaction(undefined)}
            transaction={selectedTransaction}
          />
        )}
      </Content>
    </Layout>
  );
};

export default ClientTransactions;
