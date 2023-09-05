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
import HowItWorks from '../pages/HowItWorks/HowItWorks';
import LocalePermissions from '../pages/LocalePermissions/LocalePermissions';
import Login from '../pages/Login/Login';
import Scores from '../pages/Scores/Scores';
import Sweepstake from '../pages/Sweepstake/Sweepstake';
import Terms from '../pages/Terms/Terms';
import Transactions from '../pages/Transactions/Transactions';
import Users from '../pages/Users/Users';
import WhoWeAre from '../pages/WhoWeAre/WhoWeAre';
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
          <Route path="/who-we-are" element={<WhoWeAre />} />

          <Route path="/billets" element={<Billets />} />

          <Route path="/scores" element={<Scores />} />

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
