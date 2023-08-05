import { useEffect, useState } from 'react';
import { DrawTypeChanceData } from '../interfaces/Draw';
import { PaginatedResponse } from '../interfaces/Paginated';
import api from '../services/api';
import handleError from '../services/handleToast';

export const useDrawTypeChance = () => {
  const [drawTypeChances, setDrawTypeChances] = useState<DrawTypeChanceData[]>(
    [],
  );

  useEffect(() => {
    getDrawTypeChances();
  }, []);

  const getDrawTypeChances = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<DrawTypeChanceData>>(
        '/draw-type-chances',
      );

      setDrawTypeChances(data.data);
    } catch (error) {
      handleError(error);
    }
  };

  const drawTypeChanceOptions = drawTypeChances.map(typeChance => ({
    label: typeChance.attributes.name,
    value: String(typeChance.attributes.total),
  }));

  return {
    drawTypeChanceOptions,
    drawTypeChances,
  };
};
