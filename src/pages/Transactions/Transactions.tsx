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
  const { register, control, handleSubmit } = useForm<IFilterForm>();
  const { drawOptions } = useDrawOptions();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>();
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    setIsLoading(true);
    try {
      console.log('here');
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<IFilterForm> = form => {};

  return (
    <Layout>
      <Content>
        <Title>Transações</Title>
        <FilterForm onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <Label>Origem</Label>
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
            <Input placeholder="123.456.789-00" {...register('customerCpf')} />
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
          <TableHeaderData>Origem</TableHeaderData>
          <TableHeaderData>Código EFI</TableHeaderData>
          <TableHeaderData>Sorteio</TableHeaderData>
          <TableHeaderData>Ações</TableHeaderData>
        </TableHeaderRow>

        <TableBody>
          {Array.from({ length: 12 }).map((_, index) => (
            <TableRow key={index}>
              <TableData>
                <DataText>Compra</DataText>
              </TableData>
              <TableData>
                <DataText>
                  {format(parseISO('2023-08-15'), 'dd/MM/yyyy')}
                </DataText>
              </TableData>
              <TableData>
                <DataText>Nome Sobrenome</DataText>
              </TableData>
              <TableData>
                <DataText>Pix</DataText>
              </TableData>
              <TableData>
                <DataText>12354687856418784521</DataText>
              </TableData>
              <TableData>
                <DataText>Web</DataText>
              </TableData>
              <TableData>
                <DataText>157978</DataText>
              </TableData>
              <TableData>
                <DataText>184</DataText>
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

export default Transactions;
