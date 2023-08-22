/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-function */
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Layout from '../../components/Layout/Layout';
import SmallPagination from '../../components/Pagination/Pagination';
import Select from '../../components/Select/Select';
import TransactionDetails from '../../components/TransactionDetails/TransactionDetails';
import { useDrawOptions } from '../../hooks/useDrawOptions';
import handleError from '../../services/handleToast';
import {
  Content,
  DataText,
  Field,
  FilledButton,
  FilterForm,
  Input,
  Label,
  TableBody,
  TableData,
  TableHeaderData,
  TableHeaderRow,
  TableRow,
  TextButton,
  Title,
} from './styles';
import api from '../../services/api';
import { PaginatedResponse } from '../../interfaces/Paginated';
import { IUserPayment } from '../../interfaces/UserPayments';
import MaskedInput from '../../components/MaskedInput/MaskedInput';
import { maskCPF } from '../../utils/mask';

interface Option {
  value: string;
  label: string;
}

interface IFilterForm {
  origin?: Option | null;
  drawNumber?: Option | null;
  paymentMethod?: Option | null;
  customerName: string;
  customerCpf: string;
  billetNumber: string;
  transactionNumber: string;
}

const originOptions = [
  {
    label: 'Web',
    value: 'Web',
  },
  {
    label: 'App',
    value: 'app',
  },
];

const paymentMethodOptions = [
  {
    label: 'Pix',
    value: '1',
  },
  {
    label: 'Cartão de crédito',
    value: '2',
  },
  {
    label: 'Saldo',
    value: '4',
  },
];

const Transactions = () => {
  const { register, control, handleSubmit, getValues } = useForm<IFilterForm>();
  const { drawOptions } = useDrawOptions();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState<number>();
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);

  const [userPayments, setUserPayments] = useState<IUserPayment[]>([]);

  useEffect(() => {
    getTransactions(1);
  }, []);

  const getTransactions = async (pageParam: number, form?: IFilterForm) => {
    setIsLoading(true);

    const formValues = form || getValues();

    try {
      const { data } = await api.get<PaginatedResponse<IUserPayment>>(
        '/user-payments',
        {
          params: {
            'pagination[page]': pageParam,
            'filters[$or][0][ourNumber][$eq]':
              formValues?.billetNumber || undefined,
            'filters[$or][1][payment_type][id][$eq]':
              formValues?.paymentMethod?.value || undefined,
            'filters[$or][2][origin][$eq]':
              formValues?.origin?.value || undefined,
            'filters[$or][3][user][name][$containsi]':
              formValues?.customerName || undefined,
            'filters[$or][4][user][username][$containsi]':
              formValues?.customerCpf || undefined,
            'filters[$or][5][externalId][$eq]':
              formValues?.transactionNumber || undefined,
            sort: 'createdAt:desc',
            populate: '*',
          },
        },
      );

      setMaximumPage(data.meta.pagination.pageCount);
      setUserPayments(data.data);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<IFilterForm> = form => {
    setPage(1);
    getTransactions(1, form);
  };

  return (
    <Layout>
      <Content>
        <Title>Transações</Title>
        <FilterForm onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <Label>Canal de venda</Label>
            <Controller
              control={control}
              name="origin"
              render={({ field: { value, onChange } }) => (
                <Select
                  options={originOptions}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Field>
          <Field>
            <Label>Sorteio</Label>
            <Controller
              control={control}
              name="drawNumber"
              render={({ field: { value, onChange } }) => (
                <Select
                  options={drawOptions}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Field>
          <Field>
            <Label>Forma de pagamento</Label>
            <Controller
              control={control}
              name="paymentMethod"
              render={({ field: { value, onChange } }) => (
                <Select
                  options={paymentMethodOptions}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Field>

          <Field>
            <Label>Número do boleto</Label>
            <Input
              placeholder="0000000000000000"
              {...register('billetNumber')}
            />
          </Field>
          <Field>
            <Label>Nome do cliente</Label>
            <Input
              placeholder="Pesquise pelo nome do cliente"
              {...register('customerName')}
            />
          </Field>
          <Field>
            <Label>CPF do cliente</Label>
            <Input
              as={MaskedInput}
              maskFunction={maskCPF}
              maxLength={14}
              placeholder="123.456.789-00"
              {...register('customerCpf')}
            />
          </Field>
          <Field>
            <Label>Número da transação</Label>
            <Input
              placeholder="Pesquise pelo número da transação"
              {...register('transactionNumber')}
            />
          </Field>

          <FilledButton disabled={isLoading}>Pesquisar</FilledButton>
        </FilterForm>

        <TableHeaderRow>
          <TableHeaderData>Compra/Crédito</TableHeaderData>
          <TableHeaderData>Data</TableHeaderData>
          <TableHeaderData>Cliente</TableHeaderData>
          <TableHeaderData>Forma de pagamento</TableHeaderData>
          <TableHeaderData>Nosso número</TableHeaderData>
          <TableHeaderData>Canal de venda</TableHeaderData>
          <TableHeaderData>Código EFI</TableHeaderData>
          <TableHeaderData>Sorteio</TableHeaderData>
          <TableHeaderData>Ações</TableHeaderData>
        </TableHeaderRow>

        <TableBody>
          {userPayments.map(payment => (
            <TableRow key={payment.id}>
              <TableData>
                <DataText>Compra</DataText>
              </TableData>
              <TableData>
                <DataText>
                  {format(parseISO(payment.attributes.createdAt), 'dd/MM/yyyy')}
                </DataText>
              </TableData>
              <TableData>
                <DataText>
                  {payment.attributes?.user?.data?.attributes?.name || '-'}
                </DataText>
              </TableData>
              <TableData>
                <DataText>
                  {payment.attributes?.payment_type?.data?.attributes?.name ||
                    '-'}
                </DataText>
              </TableData>
              <TableData>
                <DataText>{payment.attributes.ourNumber || '-'}</DataText>
              </TableData>
              <TableData>
                <DataText>{payment.attributes.origin || '-'}</DataText>
              </TableData>
              <TableData>
                <DataText>{payment.attributes.externalId || '-'}</DataText>
              </TableData>
              <TableData>
                <DataText>-</DataText>
              </TableData>
              <TableData>
                <TextButton
                  type="button"
                  onClick={() => setSelectedTransactionId(payment.id)}
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
          handleChange={(_, newPage) => {
            setPage(newPage);
            getTransactions(newPage);
          }}
        />
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

export default Transactions;
