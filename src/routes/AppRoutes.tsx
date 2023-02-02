import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ClientDetails from '../pages/ClientDetails/ClientDetails';
import ClubDetails from '../pages/ClubDetails/ClubDetails';
import EditAccount from '../pages/EditAccount/EditAccount';
import EditFee from '../pages/EditFee/EditFee';
import EditProfile from '../pages/EditProfile/EditProfile';
import EditSale from '../pages/EditSale/EditSale';
import EditTerms from '../pages/EditTerms/EditTerms';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import ManageFees from '../pages/ManageFees/ManageFees';
import ManageSales from '../pages/ManageSales/ManageSales';
import NewAccount from '../pages/NewAccount/NewAccount';
import NewFee from '../pages/NewFee/NewFee';
import NewSale from '../pages/NewSale/NewSale';
import Payment from '../pages/Payment/Payment';
import Sales from '../pages/Sales/Sales';
import Tax from '../pages/Tax/Tax';
import Terms from '../pages/Terms/Terms';
import Users from '../pages/Users/Users';

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

        <Route path="/users" element={<Users />} />
        <Route path="/users/club/:id" element={<ClubDetails />} />
        <Route path="/users/client/:id" element={<ClientDetails />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/new" element={<NewAccount />} />
        <Route path="/payment/:id" element={<EditAccount />} />

        <Route path="/terms" element={<Terms />} />
        <Route path="/terms/edit-terms" element={<EditTerms />} />

        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
