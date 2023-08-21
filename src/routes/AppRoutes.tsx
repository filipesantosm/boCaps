import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Billets from '../pages/Billets/Billets';
import Birthdays from '../pages/Birthdays/Birthdays';
import ClientDetails from '../pages/ClientDetails/ClientDetails';
import ClientTransactions from '../pages/ClientTransactions/ClientTransactions';
import Dashboard from '../pages/Dashboard/Dashboard';
import DrawPromos from '../pages/DrawPromos/DrawPromos';
import Draws from '../pages/Draws/Draws';
import EditProfile from '../pages/EditProfile/EditProfile';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import HowItWorks from '../pages/HowItWorks/HowItWorks';
import Login from '../pages/Login/Login';
import Sweepstake from '../pages/Sweepstake/Sweepstake';
import Terms from '../pages/Terms/Terms';
import Transactions from '../pages/Transactions/Transactions';
import Users from '../pages/Users/Users';
import LocalePermissions from '../pages/LocalePermissions/LocalePermissions';
import PrivateRoute from './PrivateRoute';

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

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/users" element={<Users />} />
          <Route path="/users/create" element={<ClientDetails />} />
          <Route path="/users/client/:userId" element={<ClientDetails />} />

          <Route path="/birthdays" element={<Birthdays />} />
          <Route path="/sweepstake" element={<Draws />} />
          <Route path="/sweepstake/create" element={<Sweepstake />} />
          <Route path="/sweepstake/edit/:drawId" element={<Sweepstake />} />

          <Route path="/draw-promos" element={<DrawPromos />} />

          <Route path="/locale-permissions" element={<LocalePermissions />} />

          {/* <Route path="/faqs" element={<Faqs />} />
        <Route path="/faqs/:faqId" element={<DrawPromos />} /> */}
          <Route path="/how-it-works" element={<HowItWorks />} />

          <Route path="/billets" element={<Billets />} />

          <Route path="/transactions" element={<Transactions />} />
          <Route
            path="/transactions/client/:clientId"
            element={<ClientTransactions />}
          />

          <Route path="/terms" element={<Terms />} />

          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
