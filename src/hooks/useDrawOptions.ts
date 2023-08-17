import { useEffect, useMemo, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { IDraw } from '../interfaces/Draw';
import handleError from '../services/handleToast';
import api from '../services/api';
import { PaginatedResponse } from '../interfaces/Paginated';

export const useDrawOptions = () => {
  const [draws, setDraws] = useState<IDraw[]>([]);

  useEffect(() => {
    getDraws();
  }, []);

  const getDraws = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<IDraw>>('/draws', {
        params: {
          'pagination[pageSize]': 100,
          fields: 'name,dateDraw,dateFinal',
        },
      });

      setDraws(data.data);
    } catch (error) {
      handleError(error);
    }
  };

  const drawOptions = useMemo(() => {
    const options = draws.map(draw => ({
      label: `${draw.attributes.name} | ${format(
        parseISO(draw.attributes.dateDraw || draw.attributes.dateFinal),
        'dd/MM/yyyy',
      )}`,
      value: draw.id.toString(),
    }));

    return options;
  }, [draws]);

  return {
    drawOptions,
  };
};
