import { createContext, useState, ReactNode } from 'react';
import { User } from '../../types/services';
import { getUsersAndTodos } from '../../app/services/ApiService';

export interface ContextType {
  authorization: {
    loggedIn: boolean;
    login: () => void;
    logout: () => void;
  };
  users: {
    usersData: User[] | null;
    getUsersData: () => void;
  };
}

interface Props {
  children: ReactNode;
}

export const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider = ({ children }: Props) => {
  const isLoggedSS: boolean = JSON.parse(
    sessionStorage.getItem('isLogged') ?? 'false',
  );

  const [loggedIn, setLoggedIn] = useState(isLoggedSS);
  const [usersData, setUsersData] = useState<User[] | null>(null);

  const login = () => {
    sessionStorage.setItem('isLogged', 'true');
    setLoggedIn(true);

    getUsersData();
  };

  const logout = () => {
    sessionStorage.clear();
    setLoggedIn(false);
  };

  const getUsersData = () => {
    getUsersAndTodos().subscribe(data => {
      setUsersData(data);
    });
  };

  return (
    <Context.Provider
      value={{
        authorization: { loggedIn, login, logout },
        users: { usersData, getUsersData },
      }}
    >
      {children}
    </Context.Provider>
  );
};
