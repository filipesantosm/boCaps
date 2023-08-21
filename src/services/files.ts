import { UploadFileResponse } from '../interfaces/Image';
import api from './api';

export const uploadFile = async (image: File) => {
  const formData = new FormData();

  formData.append('files', image);

  const { data } = await api.post<UploadFileResponse>('/upload', formData);

  return data;
};
