import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import {
  Button,
  Content,
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
import Loading from '../../components/Loading/Loading';
import handleError from '../../services/handleToast';
import api from '../../services/api';
import { PaginatedResponse } from '../../interfaces/Paginated';
import { IFaq } from '../../interfaces/Faq';

const Faqs = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [faqs, setFaqs] = useState<IFaq[]>([]);

  useEffect(() => {
    getFaqs();
  }, [page]);

  const getFaqs = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<IFaq>>('/faqs', {
        params: {
          'pagination[pageSize]': 10,
          'pagination[page]': page,
        },
      });

      setFaqs(data.data);
      setMaximumPage(data.meta.pagination.pageCount);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Layout>
      <Content>
        <Title>Categorias de perguntas</Title>
        <PageHeader>
          <SearchDivider
            onSubmit={e => {
              e.preventDefault();
              setPage(1);
            }}
          >
            <SearchIcon />
            <SearchInput
              type="text"
              id="search"
              name="search"
              required
              placeholder="Buscar pelo ID do usuário ou número do boleto"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <Button disabled={isLoading}>
              {isLoading ? <Loading iconColor="#fff" /> : 'Pesquisar'}
            </Button>
          </SearchDivider>
        </PageHeader>
        <TableHeaderRow>
          <TableHeaderData>Título</TableHeaderData>
          <TableHeaderData>Descrição</TableHeaderData>
          <TableHeaderData>Ações</TableHeaderData>
        </TableHeaderRow>
        <TableBody>
          {faqs.map(faq => (
            <TableRow key={faq.id}>
              <TableData>{faq.attributes.title}</TableData>
              <TableData>{faq.attributes.description}</TableData>
              <TableData>Editar</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Content>
    </Layout>
  );
};

export default Faqs;
