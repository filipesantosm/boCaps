import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import SmallPagination from '../../components/Pagination/Pagination';
import { IDraw } from '../../interfaces/Draw';
import { PaginatedResponse } from '../../interfaces/Paginated';
import api from '../../services/api';
import handleError from '../../services/handleToast';
import { formatDateString } from '../../utils/formatDateString';
import {
  Button,
  CompText,
  Content,
  DrawComp,
  DrawCompDivider,
  DrawsHeader,
  DrawsHeaderDivider,
  HeaderButtons,
  MainForm,
  PageHeader,
  TableBody,
  Title,
  VisualizeIcon,
} from './styles';

const limit = 10;

const Draws = () => {
  const [draws, setDraws] = useState<IDraw[]>([]);
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);
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
