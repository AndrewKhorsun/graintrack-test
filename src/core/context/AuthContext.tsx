import { createContext, useState, ReactNode } from 'react';

export interface AuthContextType {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
}

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: Props) => {
  const isLoggedSS: boolean = JSON.parse(
    sessionStorage.getItem('isLogged') ?? 'false',
  );

  const [loggedIn, setLoggedIn] = useState(isLoggedSS);

  const login = () => {
    sessionStorage.setItem('isLogged', 'true');
    setLoggedIn(true);
  };

  const logout = () => {
    sessionStorage.clear();
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
