/* eslint-disable react/no-array-index-key */
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import SalesGraph from '../../components/SalesGraph/SalesGraph';
import TransactionDetails from '../../components/TransactionDetails/TransactionDetails';
import { IUser } from '../../interfaces/User';
import api from '../../services/api';
import handleError from '../../services/handleToast';
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
import GaugeChart from '../../components/GaugeChart/GaugeChart';
import ClientPurchasesCarousel from '../../components/ClientPurchaseCarousel/ClientPurchasesCarousel';

const ClientTransactions = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const [selectedTransactionId, setSelectedTransactionId] = useState<number>();
  const [userDetails, setUserDetails] = useState<IUser>();

  useEffect(() => {
    getUserDetails();
  }, [clientId]);

  const getUserDetails = async () => {
    if (!clientId) {
      return;
    }

    try {
      const { data } = await api.get<IUser>(`/users/${clientId}`, {
        params: {
          populate: 'user_payments,user_payments.payment_type',
        },
      });

      setUserDetails(data);
    } catch (error) {
      handleError(error);
    }
  };

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
              <ClientInfoText>{userDetails?.name}</ClientInfoText>
            </ClientInfoRow>
            <ClientInfoRow>
              <ClientInfoTitle>CPF</ClientInfoTitle>
              <ClientInfoText>{userDetails?.cpf}</ClientInfoText>
            </ClientInfoRow>
            <ClientInfoRow>
              <ClientInfoTitle>Telefone</ClientInfoTitle>
              <ClientInfoText>{userDetails?.phone}</ClientInfoText>
            </ClientInfoRow>
            <ClientInfoRow>
              <ClientInfoTitle>E-mail</ClientInfoTitle>
              <ClientInfoText>{userDetails?.email}</ClientInfoText>
            </ClientInfoRow>
            <ClientInfoRow>
              <ClientInfoTitle>Endereço</ClientInfoTitle>
              <ClientInfoText>
                {`${userDetails?.street || ''}, ${userDetails?.number || ''}, ${
                  userDetails?.cep || ''
                }, ${userDetails?.neighborhood || ''}, ${
                  userDetails?.city || ''
                } - ${userDetails?.state || ''}`}
              </ClientInfoText>
            </ClientInfoRow>
          </ClientInformationColumn>
          <ChartWrapper>
            <GaugeChart />
          </ChartWrapper>
          <ClientPurchasesCarousel />
          {/* <ChartWrapper>
            <ChartLabel>Compras por sorteio</ChartLabel>
            <SalesGraph />
          </ChartWrapper> */}
        </TopSection>
        <TableHeaderRow>
          <TableHeaderData>Data</TableHeaderData>
          <TableHeaderData>Valor</TableHeaderData>
          <TableHeaderData>Data confirmação</TableHeaderData>
          <TableHeaderData>Meio de pagamento</TableHeaderData>
          <TableHeaderData>Canal de venda</TableHeaderData>
          <TableHeaderData>Status</TableHeaderData>
          <TableHeaderData>Ações</TableHeaderData>
        </TableHeaderRow>

        <TableBody>
          {userDetails?.user_payments?.map(userPayment => (
            <TableRow key={userPayment.id}>
              <TableData>
                <DataText>
                  {format(parseISO(userPayment.createdAt), 'dd/MM/yyyy')}
                </DataText>
              </TableData>
              <TableData>
                <DataText>
                  {BRLMoneyFormater.format(userPayment.value || 0)}
                </DataText>
              </TableData>
              <TableData>
                <DataText>
                  {userPayment.dateCompensation
                    ? format(
                        parseISO(userPayment.dateCompensation),
                        'dd/MM/yyyy',
                      )
                    : '-'}
                </DataText>
              </TableData>
              <TableData>
                <DataText>{userPayment.payment_type.name}</DataText>
              </TableData>
              <TableData>
                <DataText>{userPayment.origin}</DataText>
              </TableData>
              <TableData>
                <DataText>Concluído</DataText>
              </TableData>
              <TableData>
                <TextButton
                  type="button"
                  onClick={() => setSelectedTransactionId(userPayment.id)}
                >
                  Ver mais
                </TextButton>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
        {!!selectedTransactionId && (
          <TransactionDetails
            onClose={() => setSelectedTransactionId(undefined)}
            userPaymentId={selectedTransactionId}
          />
        )}
      </Content>
    </Layout>
  );
};

export default ClientTransactions;
