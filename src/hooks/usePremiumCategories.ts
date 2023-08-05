import { useEffect, useState } from 'react';
import { DrawPremiumCategory } from '../interfaces/Draw';
import handleError from '../services/handleToast';
import api from '../services/api';
import { PaginatedResponse } from '../interfaces/Paginated';

export const usePremiumCategories = () => {
  const [premiumCategories, setPremiumCategories] = useState<
    DrawPremiumCategory[]
  >([]);

  useEffect(() => {
    getPremiumCategories();
  }, []);

  const getPremiumCategories = async () => {
    try {
      const { data } = await api.get<PaginatedResponse<DrawPremiumCategory>>(
        '/draw-categories',
      );

      setPremiumCategories(data.data);
    } catch (error) {
      handleError(error);
    }
  };

  return {
    premiumCategories,
  };
};
