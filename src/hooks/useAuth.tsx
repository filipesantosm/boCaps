/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IUser } from '../interfaces/User';

interface IUserProvider {
  user: IUser;
  setUser: React.Dispatch<SetStateAction<IUser>>;
  tab: string;
  setTab: React.Dispatch<SetStateAction<string>>;
  isAuthenticated: () => boolean;
  logout: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const AuthContext = createContext({} as IUserProvider);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [tab, setTab] = useState('clients');
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataUser = localStorage.getItem('@MultcapMaster: user');

    if (dataUser) {
      setUser(JSON.parse(dataUser));
    }
    setLoading(false);
  }, []);

  const isAuthenticated = () => {
    return user.id !== undefined;
  };

  const logout = () => {
    localStorage.removeItem('@MultcapMaster: user');
    localStorage.removeItem('@MultcapMaster: accessToken');
    localStorage.removeItem('@MultcapMaster: refreshToken');
    setUser({} as IUser);
  };

  if (loading) {
    return null;
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, logout, tab, setTab }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
