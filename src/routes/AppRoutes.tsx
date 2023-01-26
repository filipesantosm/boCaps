import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import EditFee from '../pages/EditFee/EditFee';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import ManageFees from '../pages/ManageFees/ManageFees';
import ManageSales from '../pages/ManageSales/ManageSales';
import NewFee from '../pages/NewFee/NewFee';
import Sales from '../pages/Sales/Sales';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated() ? <Navigate to="/home" /> : <Login />}
        />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/home" element={<Home />} />
        <Route path="/home/manage" element={<ManageFees />} />
        <Route path="/home/manage/new" element={<NewFee />} />
        <Route path="/home/manage/:id" element={<EditFee />} />

        <Route path="/sales" element={<Sales />} />
        <Route path="/sales/manage" element={<ManageSales />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
