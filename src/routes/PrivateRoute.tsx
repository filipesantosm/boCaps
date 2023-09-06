/* eslint-disable react/no-unstable-nested-components */
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Layout from '../components/Layout/Layout';

const PrivateRoute = ({ ...props }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? (
    <Layout>
      <Outlet {...props} />
    </Layout>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
