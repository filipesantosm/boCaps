import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import SmallPagination from '../../components/Pagination/Pagination';
import { IDraw } from '../../interfaces/Draw';
import { PaginatedResponse } from '../../interfaces/Paginated';
import api from '../../services/api';
import handleError, { handleSuccess } from '../../services/handleToast';
import { formatDateString } from '../../utils/formatDateString';
import { getFileUrl } from '../../utils/getFileUrl';
import {
  Button,
  CompText,
  Content,
  DrawComp,
  DrawCompDivider,
  DrawsHeader,
  DrawsHeaderDivider,
  GenerateButton,
  HeaderButtons,
  ImportFileLabel,
  MainForm,
  PageHeader,
  TableBody,
  Title,
  VisualizeIcon,
} from './styles';
import { UploadFileResponse } from '../../interfaces/Image';

const limit = 10;

const Draws = () => {
  const [draws, setDraws] = useState<IDraw[]>([]);
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getDraws();
  }, [page]);

  const getDraws = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<IDraw>>('/draws', {
        params: {
          'filters[active][$eq]': true,
          sort: 'number:desc',
          'pagination[page]': page,
          'pagination[pageSize]': limit,
        },
      });

      setMaximumPage(data.meta.pagination.pageCount || 1);

      setDraws(data.data);
    } catch (error) {
      handleError(error);
    }
  };

  const handleCreateDrawFile = async (drawId: number) => {
    setIsGenerating(true);
    try {
      const { data } = await api.get<{
        file: string;
      }>('/createExport', {
        params: {
          id: drawId,
        },
      });

      window.open(getFileUrl(data.file), '_blank');
    } catch (error) {
      handleError(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleImportWinners = async (file: File, drawId: number) => {
    if (file.type !== 'application/json') {
      handleError('O arquivo deve ser do tipo JSON');
      return;
    }

    try {
      const formData = new FormData();

      formData.append('files', file);

      const { data } = await api.post<UploadFileResponse>('/upload', formData);

      const fileResultId = data?.[0]?.id;

      if (fileResultId) {
        await api.post('/importResult', {
          data: {
            drawId,
            fileUpload: fileResultId,
          },
        });

        handleSuccess('Vencedores importados com sucesso!');
      } else {
        handleError('Algo deu errado, tente novamente');
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Layout>
      <Content>
        <MainForm>
          <Title>Sorteios</Title>
          <PageHeader>
            {/* <SearchDivider>
              <SearchIcon />
              <SearchInput
                type="text"
                id="search"
                name="search"
                placeholder="Buscar sorteios"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </SearchDivider> */}

            <HeaderButtons>
              <Button
                type="button"
                onClick={() => navigate('/sweepstake/create')}
              >
                Cadastrar sorteio
              </Button>
            </HeaderButtons>
          </PageHeader>

          <DrawsHeader>
            <DrawsHeaderDivider>Número</DrawsHeaderDivider>
            <DrawsHeaderDivider>Nome</DrawsHeaderDivider>
            <DrawsHeaderDivider>Data de cadastro</DrawsHeaderDivider>
            <DrawsHeaderDivider>Data final</DrawsHeaderDivider>
            <DrawsHeaderDivider>Data do sorteio</DrawsHeaderDivider>
            <DrawsHeaderDivider>Publicado</DrawsHeaderDivider>
            <DrawsHeaderDivider>Importação Vencedores</DrawsHeaderDivider>
            <DrawsHeaderDivider>Exportação Debone</DrawsHeaderDivider>
            <DrawsHeaderDivider />
          </DrawsHeader>

          <TableBody>
            {draws.map(draw => (
              <DrawComp key={draw.id}>
                <DrawCompDivider>
                  <CompText>{draw.attributes.number}</CompText>
                </DrawCompDivider>
                <DrawCompDivider>
                  <CompText>{draw.attributes.name}</CompText>
                </DrawCompDivider>
                <DrawCompDivider>
                  <CompText>
                    {formatDateString(draw.attributes.createdAt, 'dd/MM/yyyy')}
                  </CompText>
                </DrawCompDivider>
                <DrawCompDivider>
                  <CompText>
                    {formatDateString(draw.attributes.dateFinal, 'dd/MM/yyyy')}
                  </CompText>
                </DrawCompDivider>
                <DrawCompDivider>
                  <CompText>
                    {formatDateString(draw.attributes.dateDraw, 'dd/MM/yyyy')}
                  </CompText>
                </DrawCompDivider>
                <DrawCompDivider>
                  <CompText>
                    {draw.attributes.isPublished ? 'Sim' : 'Não'}
                  </CompText>
                </DrawCompDivider>
                <DrawCompDivider>
                  <ImportFileLabel>
                    <input
                      type="file"
                      accept="application/JSON"
                      onChange={e => {
                        const file = e.target.files?.[0];

                        if (file) {
                          handleImportWinners(file, draw.id);
                          e.target.value = '';
                        }
                      }}
                    />
                    Importar
                  </ImportFileLabel>
                </DrawCompDivider>
                <DrawCompDivider>
                  <GenerateButton
                    onClick={() => handleCreateDrawFile(draw.id)}
                    disabled={isGenerating}
                  >
                    Gerar arquivo
                  </GenerateButton>
                </DrawCompDivider>
                <DrawCompDivider>
                  <VisualizeIcon
                    onClick={() => navigate(`/sweepstake/edit/${draw.id}`)}
                  />
                </DrawCompDivider>
              </DrawComp>
            ))}
          </TableBody>
        </MainForm>
        <SmallPagination
          total={maximumPage}
          currentPage={page}
          handleChange={(_, newPage) => setPage(newPage)}
        />
      </Content>
    </Layout>
  );
};

export default Draws;
