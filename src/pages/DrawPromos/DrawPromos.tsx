import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import SmallPagination from '../../components/Pagination/Pagination';
import { DrawPromo } from '../../interfaces/Draw';
import { PaginatedResponse } from '../../interfaces/Paginated';
import api from '../../services/api';
import handleError from '../../services/handleToast';
import BRLMoneyFormater from '../../utils/formaters/BRLMoneyFormater';
import {
  Button,
  Content,
  DataText,
  DrawPromoData,
  DrawPromoHeaderDivider,
  DrawPromoRow,
  DrawPromosHeader,
  EditIcon,
  HeaderButtons,
  TableBody,
  Title,
} from './styles';
import DrawPromoFormModal from '../../components/DrawPromoFormModal/DrawPromoFormModal';

const DrawPromos = () => {
  const [drawPromos, setDrawPromos] = useState<DrawPromo[]>([]);
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);
  const [showDrawPromoModal, setShowDrawPromoModal] = useState(false);
  const [selectedDrawPromo, setSelectedDrawPromo] = useState<DrawPromo>();

  useEffect(() => {
    getDrawPromos();
  }, []);

  const getDrawPromos = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<DrawPromo>>(
        '/draw-promos',
        {
          params: {
            'pagination[pageSize]': 10,
            'pagination[page]': page,
          },
        },
      );

      setDrawPromos(data.data);
      setMaximumPage(data.meta.pagination.pageCount);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Layout>
      <Content>
        <Title>Promoções de sorteio</Title>
        <HeaderButtons>
          <Button type="button" onClick={() => setShowDrawPromoModal(true)}>
            Cadastrar promoção
          </Button>
        </HeaderButtons>
        <DrawPromosHeader>
          <DrawPromoHeaderDivider>Nome</DrawPromoHeaderDivider>
          <DrawPromoHeaderDivider>Valor</DrawPromoHeaderDivider>
          <DrawPromoHeaderDivider>Quantidade</DrawPromoHeaderDivider>
          <DrawPromoHeaderDivider />
        </DrawPromosHeader>

        <TableBody>
          {drawPromos.map(drawPromo => (
            <DrawPromoRow key={drawPromo.id}>
              <DrawPromoData>
                <DataText>{drawPromo.attributes.Campanha}</DataText>
              </DrawPromoData>
              <DrawPromoData>
                <DataText>
                  {BRLMoneyFormater.format(drawPromo.attributes.value)}
                </DataText>
              </DrawPromoData>
              <DrawPromoData>
                <DataText>{drawPromo.attributes.quantity}</DataText>
              </DrawPromoData>
              <DrawPromoData>
                <EditIcon
                  onClick={() => {
                    setShowDrawPromoModal(true);
                    setSelectedDrawPromo(drawPromo);
                  }}
                />
              </DrawPromoData>
            </DrawPromoRow>
          ))}
        </TableBody>
        <SmallPagination
          total={maximumPage}
          currentPage={page}
          handleChange={(_, newPage) => setPage(newPage)}
        />
      </Content>
      {showDrawPromoModal && (
        <DrawPromoFormModal
          drawPromo={selectedDrawPromo}
          onClose={() => {
            setShowDrawPromoModal(false);
            setSelectedDrawPromo(undefined);
          }}
          onSuccess={() => {
            getDrawPromos();
            setShowDrawPromoModal(false);
            setSelectedDrawPromo(undefined);
          }}
        />
      )}
    </Layout>
  );
};

export default DrawPromos;
