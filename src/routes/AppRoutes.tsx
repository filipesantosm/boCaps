import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import EditFee from '../pages/EditFee/EditFee';
import EditSale from '../pages/EditSale/EditSale';
import EditTerms from '../pages/EditTerms/EditTerms';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import ManageFees from '../pages/ManageFees/ManageFees';
import ManageSales from '../pages/ManageSales/ManageSales';
import NewFee from '../pages/NewFee/NewFee';
import NewSale from '../pages/NewSale/NewSale';
import Sales from '../pages/Sales/Sales';
import Tax from '../pages/Tax/Tax';
import Terms from '../pages/Terms/Terms';

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
        <Route path="/sales/manage/new" element={<NewSale />} />
        <Route path="/sales/manage/:id" element={<EditSale />} />

        <Route path="/tax" element={<Tax />} />

        <Route path="/terms" element={<Terms />} />
        <Route path="/terms/edit-terms" element={<EditTerms />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
