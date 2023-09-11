import { useEffect, useState } from 'react';
import { FiChevronLeft, FiEdit3, FiTrash2 } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import FaqQuestionFormModal from '../../components/FaqQuestionFormModal/FaqQuestionFormModal';
import Loading from '../../components/Loading/Loading';
import PageTitle from '../../components/PageTitle/PageTitle';
import SmallPagination from '../../components/Pagination/Pagination';
import { IFaqQuestion } from '../../interfaces/Faq';
import { PaginatedResponse } from '../../interfaces/Paginated';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import {
  BackButton,
  BackContainer,
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
} from './styles';

const FaqQuestions = () => {
  const navigate = useNavigate();
  const { faqId } = useParams();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  const [faqQuestions, setFaqQuestions] = useState<IFaqQuestion[]>([]);
  const [selectedFaqQuestion, setSelectedFaqQuestion] =
    useState<IFaqQuestion>();
  const [idToDelete, setIdToDelete] = useState<number>();

  useEffect(() => {
    getFaqQuestions();
  }, [page, faqId]);

  const getFaqQuestions = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get<PaginatedResponse<IFaqQuestion>>(
        '/faq-questions',
        {
          params: {
            'pagination[pageSize]': 10,
            'pagination[page]': page,
            'filters[question][$containsi]': search || undefined,
            'filters[faq][id][$eq]': faqId,
          },
        },
      );

      setFaqQuestions(data.data);
      setMaximumPage(data.meta.pagination.pageCount);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await api.delete(`/faq-questions/${idToDelete}`);

      getFaqQuestions();
      setIdToDelete(undefined);
      handleSuccess('Pergunta excluída com sucesso!');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      <Content>
        <PageTitle
          style={{
            marginBottom: '1rem',
          }}
        >
          Perguntas
        </PageTitle>
        <BackContainer>
          <BackButton type="button" onClick={() => navigate(-1)}>
            <FiChevronLeft />
          </BackButton>
          Voltar
        </BackContainer>
        <PageHeader>
          <SearchDivider
            onSubmit={e => {
              e.preventDefault();
              if (page === 1) {
                getFaqQuestions();
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
              placeholder="Buscar pela pergunta"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <Button disabled={isLoading}>
              {isLoading ? <Loading iconColor="#fff" /> : 'Pesquisar'}
            </Button>
          </SearchDivider>
          <Button type="button" onClick={() => setShowFormModal(true)}>
            Cadastrar pergunta
          </Button>
        </PageHeader>
        <TableHeaderRow>
          <TableHeaderData>Pergunta</TableHeaderData>
          <TableHeaderData>Resposta</TableHeaderData>
          <TableHeaderData>Ações</TableHeaderData>
        </TableHeaderRow>
        <TableBody>
          {faqQuestions.map(faqQuestion => (
            <TableRow key={faqQuestion.id}>
              <TableData>
                <DataText>{faqQuestion.attributes.question}</DataText>
              </TableData>
              <TableData>
                <DataText>{faqQuestion.attributes.response}</DataText>
              </TableData>
              <TableData>
                <ButtonsContainer>
                  <IconButton
                    type="button"
                    onClick={() => {
                      setShowFormModal(true);
                      setSelectedFaqQuestion(faqQuestion);
                    }}
                    title="Editar pergunta"
                  >
                    <FiEdit3 />
                  </IconButton>
                  <IconButton
                    type="button"
                    onClick={() => {
                      setIdToDelete(faqQuestion.id);
                    }}
                    title="Excluir pergunta"
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
      {idToDelete && (
        <ConfirmModal
          message="Tem certeza que deseja excluir essa pergunta?"
          onClose={() => setIdToDelete(undefined)}
          onConfirm={handleConfirmDelete}
          onCancel={() => setIdToDelete(undefined)}
        />
      )}
      {showFormModal && (
        <FaqQuestionFormModal
          faqId={faqId || ''}
          onClose={() => {
            setShowFormModal(false);
            setSelectedFaqQuestion(undefined);
          }}
          onFinishSubmit={() => {
            setShowFormModal(false);
            setSelectedFaqQuestion(undefined);
            getFaqQuestions();
          }}
          initialFaqQuestion={selectedFaqQuestion}
        />
      )}
    </>
  );
};

export default FaqQuestions;
