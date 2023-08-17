/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-function */
import { format, parseISO } from 'date-fns';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Select from '../../components/Select/Select';
import SweepstakeInput from '../../components/SweepstakeInput/SweepstakeInput';
import { useDrawOptions } from '../../hooks/useDrawOptions';
import {
  Content,
  DataText,
  FilledButton,
  FilterForm,
  FormRow,
  SelectLabel,
  SelectWrapper,
  TableBody,
  TableData,
  TableHeaderData,
  TableHeaderRow,
  TableRow,
  TextButton,
  Title,
} from './styles';
import SmallPagination from '../../components/Pagination/Pagination';
import handleError from '../../services/handleToast';
import TransactionDetails from '../../components/TransactionDetails/TransactionDetails';

interface IFilterForm {
  origin: string;
  drawNumber: string;
  paymentMethod: string;
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
          <SelectWrapper>
            <SelectLabel>Origem</SelectLabel>
            <Controller
              control={control}
              name="origin"
              render={({ field: { value, onChange } }) => (
                <Select
                  options={originOptions}
                  value={originOptions.find(option => option.value === value)}
                  onChange={(option: any) => onChange(option.value)}
                />
              )}
            />
          </SelectWrapper>
          <SelectWrapper>
            <SelectLabel>Sorteio</SelectLabel>
            <Controller
              control={control}
              name="drawNumber"
              render={({ field: { value, onChange } }) => (
                <Select
                  options={drawOptions}
                  value={drawOptions.find(option => option.value === value)}
                  onChange={(option: any) => onChange(option.value)}
                />
              )}
            />
          </SelectWrapper>
          <SelectWrapper>
            <SelectLabel>Forma de pagamento</SelectLabel>
            <Controller
              control={control}
              name="paymentMethod"
              render={({ field: { value, onChange } }) => (
                <Select
                  options={paymentMethodOptions}
                  value={paymentMethodOptions.find(
                    option => option.value === value,
                  )}
                  onChange={(option: any) => onChange(option.value)}
                />
              )}
            />
          </SelectWrapper>

          <SweepstakeInput label="Número do boleto" />
          <SweepstakeInput label="Nome do cliente" />
          <SweepstakeInput label="CPF do cliente" />
          <SweepstakeInput label="Número da transação" />

          <FilledButton>Pesquisar</FilledButton>
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
