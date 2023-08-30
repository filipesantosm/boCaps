import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../hooks/useAuth';
import AppRoutes from '../routes/AppRoutes';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <AppRoutes />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
