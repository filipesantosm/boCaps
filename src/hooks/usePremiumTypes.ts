import { useEffect, useState } from 'react';
import { DrawTypePremium } from '../interfaces/Draw';
import handleError from '../services/handleToast';
import api from '../services/api';
import { PaginatedResponse } from '../interfaces/Paginated';

export const usePremiumTypes = () => {
  const [drawTypePremiums, setDrawTypePremiums] = useState<DrawTypePremium[]>(
    [],
  );

  useEffect(() => {
    getDrawTypePremiums();
  }, []);

  const getDrawTypePremiums = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<DrawTypePremium>>(
        '/draw-type-premiums',
      );

      setDrawTypePremiums(data.data);
    } catch (error) {
      handleError(error);
    }
  };

  return {
    drawTypePremiums,
  };
};
