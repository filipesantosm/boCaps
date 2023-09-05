import { useEffect, useState } from 'react';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import FaqVideoFormModal from '../../components/FaqVideoFormModal/FaqVideoFormModal';
import Loading from '../../components/Loading/Loading';
import PageTitle from '../../components/PageTitle/PageTitle';
import SmallPagination from '../../components/Pagination/Pagination';
import { IFaqVideo } from '../../interfaces/Faq';
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
} from './styles';

const FaqVideos = () => {
  const [faqVideos, setFaqVideos] = useState<IFaqVideo[]>([]);
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [idToDelete, setIdToDelete] = useState<number>();

  const [selectedFaqVideo, setSelectedFaqVideo] = useState<IFaqVideo>();
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    getFaqVideos();
  }, [page]);

  const getFaqVideos = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get<PaginatedResponse<IFaqVideo>>(
        '/faq-videos',
        {
          params: {
            'pagination[pageSize]': 10,
            'pagination[page]': page,
            'filters[title][$containsi]': search || undefined,
          },
        },
      );

      setFaqVideos(data.data);
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

      getFaqVideos();
      handleSuccess('Pergunta excluída com sucesso!');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Content>
      <PageTitle>Ajuda - Vídeos</PageTitle>

      <PageHeader>
        <SearchDivider
          onSubmit={e => {
            e.preventDefault();
            if (page === 1) {
              getFaqVideos();
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
            placeholder="Buscar pelo título do vídeo"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Button disabled={isLoading}>
            {isLoading ? <Loading iconColor="#fff" /> : 'Pesquisar'}
          </Button>
        </SearchDivider>
        <Button type="button" onClick={() => setShowFormModal(true)}>
          Cadastrar vídeo
        </Button>
      </PageHeader>
      <TableHeaderRow>
        <TableHeaderData>Título</TableHeaderData>
        <TableHeaderData>Link YouTube</TableHeaderData>
        <TableHeaderData>Ações</TableHeaderData>
      </TableHeaderRow>
      <TableBody>
        {faqVideos.map(faqVideo => (
          <TableRow key={faqVideo.id}>
            <TableData>
              <DataText>{faqVideo.attributes.title}</DataText>
            </TableData>
            <TableData>
              <DataText>{faqVideo.attributes.url}</DataText>
            </TableData>
            <TableData>
              <ButtonsContainer>
                <IconButton
                  type="button"
                  onClick={() => {
                    setShowFormModal(true);
                    setSelectedFaqVideo(faqVideo);
                  }}
                  title="Editar categoria"
                >
                  <FiEdit3 />
                </IconButton>

                <IconButton
                  type="button"
                  onClick={() => {
                    setIdToDelete(faqVideo.id);
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
      {showFormModal && (
        <FaqVideoFormModal
          onClose={() => {
            setShowFormModal(false);
            setSelectedFaqVideo(undefined);
          }}
          onFinishSubmit={() => {
            setShowFormModal(false);
            setSelectedFaqVideo(undefined);
            getFaqVideos();
          }}
          initialFaqVideo={selectedFaqVideo}
        />
      )}
      {idToDelete && (
        <ConfirmModal
          message="Tem certeza que deseja excluir esse vídeo?"
          onClose={() => setIdToDelete(undefined)}
          onConfirm={handleConfirmDelete}
          onCancel={() => setIdToDelete(undefined)}
        />
      )}
    </Content>
  );
};

export default FaqVideos;
