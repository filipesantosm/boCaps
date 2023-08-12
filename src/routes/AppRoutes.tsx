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
import Dashboard from '../pages/Dashboard/Dashboard';
import DrawPromos from '../pages/DrawPromos/DrawPromos';
import Draws from '../pages/Draws/Draws';
import EditProfile from '../pages/EditProfile/EditProfile';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import Login from '../pages/Login/Login';
import Sweepstake from '../pages/Sweepstake/Sweepstake';
import Terms from '../pages/Terms/Terms';
import Users from '../pages/Users/Users';

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

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/users" element={<Users />} />
        <Route path="/users/create" element={<ClientDetails />} />
        <Route path="/users/client/:userId" element={<ClientDetails />} />

        <Route path="/birthdays" element={<Birthdays />} />
        <Route path="/sweepstake" element={<Draws />} />
        <Route path="/sweepstake/create" element={<Sweepstake />} />
        <Route path="/sweepstake/edit/:drawId" element={<Sweepstake />} />

        <Route path="/draw-promos" element={<DrawPromos />} />

        <Route path="/billets" element={<Billets />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
