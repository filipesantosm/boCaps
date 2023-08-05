import { IDraw } from '../interfaces/Draw';

const apiUrl = import.meta.env.VITE_API_URL || '';

export const imageUrl = (imagePath?: string) => {
  const baseApiUrl = apiUrl.split('/api/')[0];

  return imagePath ? `${baseApiUrl}${imagePath || ''}` : '';
};

export const getDrawImage = (draw?: IDraw) => {
  const imagePath = draw?.attributes?.image?.data?.attributes?.url || '';

  return imageUrl(imagePath);
};
