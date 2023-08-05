/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from 'axios';

export const baseURL = import.meta.env.VITE_API_URL || '';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async config => {
    const accessToken = localStorage.getItem('@MultcapMaster: accessToken');
    if (accessToken) {
      config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default api;

/* export async function refreshAccessToken() {
  try {
    const credentials = localStorage.getItem('@MultcapMaster: refreshToken');
    if (typeof credentials === 'string') {
      const { data } = await api.put('/user/session', {
        refresh_token: credentials,
      });
      localStorage.setItem('@MultcapMaster: accessToken', data.access_token);
      localStorage.setItem('@MultcapMaster: refreshToken', data.refresh_token);
      return data?.access_token;
    }
  } catch (error) {
    localStorage.clear();
    window.location.href = '/';
  }
  localStorage.clear();
  window.location.href = '/';
} */

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      !originalRequest.url.includes('auth')
    ) {
      localStorage.clear();
      window.location.href = '/';
    }
    return Promise.reject(error);
  },
);
