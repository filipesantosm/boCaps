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
import FaqQuestions from '../pages/FaqQuestions/FaqQuestions';
import FaqVideos from '../pages/FaqVideos/FaqVideos';
import Faqs from '../pages/Faqs/Faqs';
import HowItWorks from '../pages/HowItWorks/HowItWorks';
import Information from '../pages/Information/Information';
import Institutions from '../pages/Institutions/Institutions';
import LocalePermissions from '../pages/LocalePermissions/LocalePermissions';
import Login from '../pages/Login/Login';
import Scores from '../pages/Scores/Scores';
import Sweepstake from '../pages/Sweepstake/Sweepstake';
import Terms from '../pages/Terms/Terms';
import Transactions from '../pages/Transactions/Transactions';
import Users from '../pages/Users/Users';
import WhoWeAre from '../pages/WhoWeAre/WhoWeAre';
import PrivateRoute from './PrivateRoute';
import Regulation from '../pages/Regulation/Regulation';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';

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

          <Route path="/infos" element={<Information />} index />
          <Route path="/infos/faqs" element={<Faqs />} index />
          <Route path="/infos/faqs/:faqId" element={<FaqQuestions />} />
          <Route path="/infos/faq-videos" element={<FaqVideos />} />
          <Route path="/infos/how-it-works" element={<HowItWorks />} />
          <Route path="/infos/institutions" element={<Institutions />} />
          <Route path="/infos/who-we-are" element={<WhoWeAre />} />
          <Route path="/infos/regulation" element={<Regulation />} />
          <Route path="/infos/privacy-policy" element={<PrivacyPolicy />} />

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
