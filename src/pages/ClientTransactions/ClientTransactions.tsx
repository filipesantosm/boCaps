/* eslint-disable react/no-array-index-key */
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ClientPurchasesCarousel from '../../components/ClientPurchaseCarousel/ClientPurchasesCarousel';
import GaugeChart from '../../components/GaugeChart/GaugeChart';
import Layout from '../../components/Layout/Layout';
import Select from '../../components/Select/Select';
import SortButton, {
  SortDirection,
} from '../../components/SortButton/SortButton';
import TransactionDetails from '../../components/TransactionDetails/TransactionDetails';
import { useDrawOptions } from '../../hooks/useDrawOptions';
import { IUser } from '../../interfaces/User';
import api from '../../services/api';
import handleError from '../../services/handleToast';
import BRLMoneyFormater from '../../utils/formaters/BRLMoneyFormater';
import {
  BackIcon,
  ChartWrapper,
  ClientInfoRow,
  ClientInfoText,
  ClientInfoTitle,
  ClientInformationColumn,
  Content,
  DataText,
  FilledButton,
  FilterField,
  FilterInput,
  FilterLabel,
  FilterRow,
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

type SortObject = Record<string, SortDirection>;

const ClientTransactions = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState<IUser>();
  const [selectedTransactionId, setSelectedTransactionId] = useState<number>();

  const [isLoading, setIsLoading] = useState(false);
  const [sortObject, setSortObject] = useState<SortObject>({
    createdAt: 'desc',
  });

  useEffect(() => {
    getUserDetails();
  }, [clientId, sortObject]);

  const getUserDetails = async () => {
    if (!clientId) {
      return;
    }

    const sortParams = sortObject
      ? Object.entries(sortObject)
          .map(([key, value]) => (value ? `${key}:${value}` : undefined))
          .filter(Boolean)
      : undefined;

    setIsLoading(true);
    try {
      const { data } = await api.get<IUser>(`/users/${clientId}`, {
        params: {
          'populate[user_payments][populate]': 'payment_type',
          'populate[user_payments][sort]': sortParams,
        },
      });

      setUserDetails(data);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const { drawOptions } = useDrawOptions();

  const handleChangeSort = (key: string, dir: SortDirection) => {
    setSortObject(prev => ({
      ...prev,
      [key]: dir,
    }));
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
        </TopSection>

        <FilterRow>
          <FilterField>
            <FilterLabel>Sorteio:</FilterLabel>
            <Select options={drawOptions} />
          </FilterField>
          <FilterField>
            <FilterLabel>Data:</FilterLabel>
            <FilterInput type="date" />
          </FilterField>
          <FilterField>
            <FilterLabel>Número do boleto:</FilterLabel>
            <FilterInput type="text" placeholder="Insira o número do boleto" />
          </FilterField>
          <FilledButton>Pesquisar</FilledButton>
        </FilterRow>

        <TableHeaderRow>
          <TableHeaderData>
            Data{' '}
            <SortButton
              disabled={isLoading}
              direction={sortObject?.createdAt}
              onChangeDirection={(dir: SortDirection) =>
                handleChangeSort('createdAt', dir)
              }
            />
          </TableHeaderData>
          <TableHeaderData>
            Valor{' '}
            <SortButton
              disabled={isLoading}
              direction={sortObject?.value}
              onChangeDirection={(dir: SortDirection) =>
                handleChangeSort('value', dir)
              }
            />
          </TableHeaderData>
          <TableHeaderData>
            Data confirmação{' '}
            <SortButton
              disabled={isLoading}
              direction={sortObject?.dateCompensation}
              onChangeDirection={(dir: SortDirection) =>
                handleChangeSort('dateCompensation', dir)
              }
            />
          </TableHeaderData>
          <TableHeaderData>
            Meio de pagamento{' '}
            <SortButton
              disabled={isLoading}
              direction={sortObject?.['payment_type.name']}
              onChangeDirection={(dir: SortDirection) =>
                handleChangeSort('payment_type.name', dir)
              }
            />
          </TableHeaderData>
          <TableHeaderData>
            Número do boleto{' '}
            <SortButton
              disabled={isLoading}
              direction={sortObject?.ourNumber}
              onChangeDirection={(dir: SortDirection) =>
                handleChangeSort('ourNumber', dir)
              }
            />
          </TableHeaderData>
          <TableHeaderData>
            Canal de venda{' '}
            <SortButton
              disabled={isLoading}
              direction={sortObject?.origin}
              onChangeDirection={(dir: SortDirection) =>
                handleChangeSort('origin', dir)
              }
            />
          </TableHeaderData>
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
                <DataText
                  style={{
                    cursor: userPayment.ourNumber ? 'pointer' : 'auto',
                  }}
                  onClick={() => {
                    if (userPayment.ourNumber) {
                      navigator.clipboard.writeText(userPayment.ourNumber);
                    }
                  }}
                >
                  {userPayment.ourNumber || '-'}
                </DataText>
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
