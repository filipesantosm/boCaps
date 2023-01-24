import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import AppRoutes from '../routes/AppRoutes';
import GlobalStyle from '../styles/global';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '../hooks/useAuth';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <AppRoutes />
      <GlobalStyle />
    </AuthProvider>
  </React.StrictMode>,
);
