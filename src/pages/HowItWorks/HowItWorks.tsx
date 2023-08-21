import { useEffect, useState } from 'react';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';
import SmallPagination from '../../components/Pagination/Pagination';
import TermDetailsModal from '../../components/TermDetailsModal/TermDetailsModal';
import { PaginatedResponse } from '../../interfaces/Paginated';
import { ITermDetails } from '../../interfaces/Terms';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import {
  Button,
  ButtonsContainer,
  Content,
  DataText,
  IconButton,
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

const HowItWorks = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [idToDelete, setIdToDelete] = useState(0);

  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedTermDetail, setSelectedTermDetail] = useState<ITermDetails>();

  const [termDetails, setTermDetails] = useState<ITermDetails[]>([]);

  useEffect(() => {
    getTermDetails();
  }, [page]);

  const getTermDetails = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get<PaginatedResponse<ITermDetails>>(
        '/term-details',
        {
          params: {
            populate: '*',
            'filters[term_use][id][$eq]': 5,
            'pagination[page]': page,
            'filters[$or][0][title][$containsi]': search || undefined,
            'filters[$or][1][description][$containsi]': search || undefined,
          },
        },
      );

      setTermDetails(data.data);
      setMaximumPage(data.meta.pagination.pageCount);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTermDetail = (id: number) => {
    setIdToDelete(id);
  };

  const confirmDeleteTermDetail = async () => {
    if (!idToDelete) {
      return;
    }

    try {
      await api.delete(`/term-details/${idToDelete}`);
      handleSuccess('Item excluído com sucesso!');
      setIdToDelete(0);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Layout>
      <Content>
        <Title>Como funciona</Title>
        <PageHeader>
          <SearchDivider
            onSubmit={e => {
              e.preventDefault();
              if (page === 1) {
                getTermDetails();
              } else {
                setPage(1);
              }
            }}
          >
            <SearchIcon />
            <SearchInput
              type="text"
              id="search"
              name="search"
              required
              placeholder="Buscar"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <Button disabled={isLoading}>
              {isLoading ? <Loading iconColor="#fff" /> : 'Pesquisar'}
            </Button>
          </SearchDivider>

          <Button onClick={() => setShowFormModal(true)}>Cadastrar</Button>
        </PageHeader>
        <TableHeaderRow>
          <TableHeaderData>Título</TableHeaderData>
          <TableHeaderData>Texto</TableHeaderData>
          <TableHeaderData>Ações</TableHeaderData>
        </TableHeaderRow>
        <TableBody>
          {termDetails.map(termDetail => (
            <TableRow key={termDetail.id}>
              <TableData>
                <DataText>{termDetail.attributes.title}</DataText>
              </TableData>
              <TableData>
                <DataText>{termDetail.attributes.description}</DataText>
              </TableData>
              <TableData>
                <ButtonsContainer>
                  <IconButton
                    type="button"
                    onClick={() => {
                      setSelectedTermDetail(termDetail);
                      setShowFormModal(true);
                    }}
                  >
                    <FiEdit3 />
                  </IconButton>
                  {/* <IconButton
                    type="button"
                    onClick={() => {
                      setSelectedTermDetail(termDetail);
                      setShowFormModal(true);
                    }}
                  >
                    <FiTrash2 />
                  </IconButton> */}
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
        {showFormModal && (
          <TermDetailsModal
            onClose={() => {
              setShowFormModal(false);
              setSelectedTermDetail(undefined);
            }}
            onSuccess={() => {
              setShowFormModal(false);
              setSelectedTermDetail(undefined);
              getTermDetails();
            }}
            initialTermDetails={selectedTermDetail}
          />
        )}
      </Content>
    </Layout>
  );
};

export default HowItWorks;
