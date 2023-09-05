import { useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import FaqFormModal from '../../components/FaqFormModal/FaqFormModal';
import Loading from '../../components/Loading/Loading';
import SmallPagination from '../../components/Pagination/Pagination';
import { IFaq } from '../../interfaces/Faq';
import { PaginatedResponse } from '../../interfaces/Paginated';
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

const Faqs = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number>();

  const [selectedFaq, setSelectedFaq] = useState<IFaq>();
  const [showFormModal, setShowFormModal] = useState(false);

  const [faqs, setFaqs] = useState<IFaq[]>([]);

  useEffect(() => {
    getFaqs();
  }, [page]);

  const getFaqs = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get<PaginatedResponse<IFaq>>('/faqs', {
        params: {
          'pagination[pageSize]': 10,
          'pagination[page]': page,
          'filters[title][$containsi]': search || undefined,
        },
      });

      setFaqs(data.data);
      setMaximumPage(data.meta.pagination.pageCount);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await api.delete(`/faqs/${idToDelete}`);

      getFaqs();
      handleSuccess('Pergunta excluída com sucesso!');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      <Content>
        <Title>Categorias de perguntas</Title>
        <PageHeader>
          <SearchDivider
            onSubmit={e => {
              e.preventDefault();
              if (page === 1) {
                getFaqs();
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
              placeholder="Buscar pelo título da categoria"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <Button disabled={isLoading}>
              {isLoading ? <Loading iconColor="#fff" /> : 'Pesquisar'}
            </Button>
          </SearchDivider>
          <Button type="button" onClick={() => setShowFormModal(true)}>
            Cadastrar categoria
          </Button>
        </PageHeader>
        <TableHeaderRow>
          <TableHeaderData>Título</TableHeaderData>
          <TableHeaderData>Descrição</TableHeaderData>
          <TableHeaderData>Ações</TableHeaderData>
        </TableHeaderRow>
        <TableBody>
          {faqs.map(faq => (
            <TableRow key={faq.id}>
              <TableData>
                <DataText>{faq.attributes.title}</DataText>
              </TableData>
              <TableData>
                <DataText>{faq.attributes.description}</DataText>
              </TableData>
              <TableData>
                <ButtonsContainer>
                  <IconButton
                    type="button"
                    onClick={() => {
                      navigate(`/infos/faqs/${faq.id}`);
                    }}
                    title="Visualizar perguntas"
                  >
                    <AiOutlineEye
                      style={{
                        fontSize: '2rem',
                      }}
                    />
                  </IconButton>

                  <IconButton
                    type="button"
                    onClick={() => {
                      setShowFormModal(true);
                      setSelectedFaq(faq);
                    }}
                    title="Editar categoria"
                  >
                    <FiEdit3 />
                  </IconButton>

                  <IconButton
                    type="button"
                    onClick={() => {
                      setIdToDelete(faq.id);
                    }}
                    title="Excluir categoria"
                  >
                    <FiTrash2 />
                  </IconButton>
                </ButtonsContainer>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
        <SmallPagination
          currentPage={page}
          handleChange={(_, newPage) => setPage(newPage)}
          total={maximumPage}
        />
      </Content>
      {showFormModal && (
        <FaqFormModal
          onClose={() => {
            setShowFormModal(false);
            setSelectedFaq(undefined);
          }}
          onFinishSubmit={() => {
            setShowFormModal(false);
            setSelectedFaq(undefined);
            getFaqs();
          }}
          initialFaq={selectedFaq}
        />
      )}
      {idToDelete && (
        <ConfirmModal
          message="Tem certeza que deseja excluir essa categoria?"
          onClose={() => setIdToDelete(undefined)}
          onConfirm={handleConfirmDelete}
          onCancel={() => setIdToDelete(undefined)}
        />
      )}
    </>
  );
};

export default Faqs;
