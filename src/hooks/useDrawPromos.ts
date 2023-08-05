import { useEffect, useMemo, useState } from 'react';
import { DrawPromo } from '../interfaces/Draw';
import handleError from '../services/handleToast';
import api from '../services/api';
import { PaginatedResponse } from '../interfaces/Paginated';

export const useDrawPromos = () => {
  const [drawPromos, setDrawPromos] = useState<DrawPromo[]>([]);

  useEffect(() => {
    getDrawPromos();
  }, []);

  const getDrawPromos = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<DrawPromo>>(
        '/draw-promos',
        {
          params: {
            'pagination[pageSize]': 999,
          },
        },
      );

      setDrawPromos(data.data);
    } catch (error) {
      handleError(error);
    }
  };

  const drawPromoOptions = useMemo(() => {
    return drawPromos.map(drawPromo => ({
      label: drawPromo.attributes.Campanha,
      value: drawPromo.id.toString(),
    }));
  }, [drawPromos]);

  return { drawPromoOptions, drawPromos };
};
