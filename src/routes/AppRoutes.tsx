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
import GreenFeeDetail from '../pages/GreenFeeDetail/GreenFeeDetail';
import EditClubFee from '../pages/EditClubFee/EditClubFee';
import NewClubFee from '../pages/NewClubFee/NewClubFee';
import ClubSales from '../pages/ClubSales/ClubSales';
import NewClubSale from '../pages/NewClubSale/NewClubSale';
import EditClubSale from '../pages/EditClubSale/EditClubSale';
import NewClient from '../pages/NewClient/NewClient';
import Birthdays from '../pages/Birthdays/Birthdays';
import Dashboard from '../pages/Dashboard/Dashboard';
import Sweepstake from '../pages/Sweepstake/Sweepstake';
import Draws from '../pages/Draws/Draws';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated() ? <Navigate to="/users" /> : <Login />}
        />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* <Route path="/home" element={<Home />} />
        <Route path="/home/:clubId" element={<GreenFeeDetail />} />
        <Route path="/home/:clubId/:id" element={<EditClubFee />} />
        <Route path="/home/:clubId/new" element={<NewClubFee />} />
        <Route path="/home/manage" element={<ManageFees />} />
        <Route path="/home/manage/new" element={<NewFee />} />
        <Route path="/home/manage/:id" element={<EditFee />} /> */}

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/sales" element={<Sales />} />
        <Route path="/sales/:clubId" element={<ClubSales />} />
        <Route path="/sales/:clubId/:id" element={<EditClubSale />} />
        <Route path="/sales/:clubId/new" element={<NewClubSale />} />
        <Route path="/sales/manage" element={<ManageSales />} />
        <Route path="/sales/manage/new" element={<NewSale />} />
        <Route path="/sales/manage/:id" element={<EditSale />} />

        <Route path="/tax" element={<Tax />} />

        <Route path="/users" element={<Users />} />
        <Route path="/users/create" element={<NewClient />} />
        <Route path="/users/club/:id" element={<ClubDetails />} />
        <Route path="/users/client/:userId" element={<ClientDetails />} />

        <Route path="/birthdays" element={<Birthdays />} />
        <Route path="/sweepstake" element={<Draws />} />
        <Route path="/sweepstake/create" element={<Sweepstake />} />
        <Route path="/sweepstake/edit/:drawId" element={<Sweepstake />} />

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
