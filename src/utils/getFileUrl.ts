const apiUrl = import.meta.env.VITE_API_URL || '';

export const getFileUrl = (fileName?: string) => {
  const baseApiUrl = apiUrl.split('/api/')[0];

  return fileName ? `${baseApiUrl}/uploads/${fileName || ''}` : '';
};
