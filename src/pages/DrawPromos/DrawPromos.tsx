import { useEffect, useState } from 'react';
import DrawPromoFormModal from '../../components/DrawPromoFormModal/DrawPromoFormModal';
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

const DrawPromos = () => {
  const [drawPromos, setDrawPromos] = useState<DrawPromo[]>([]);
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);
  const [showDrawPromoModal, setShowDrawPromoModal] = useState(false);
  const [selectedDrawPromo, setSelectedDrawPromo] = useState<DrawPromo>();

  useEffect(() => {
    getDrawPromos();
  }, [page]);

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
    <Content>
      <Title>Tipos de título</Title>
      <HeaderButtons>
        <Button type="button" onClick={() => setShowDrawPromoModal(true)}>
          Cadastrar tipo
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
    </Content>
  );
};

export default DrawPromos;
