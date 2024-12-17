import { createContext, ReactNode, useContext, useState } from 'react';

export interface User {
  username: string;
  password: string;
  role: string | null;
  id: number | null;
}

interface UserContextType {
  user: User | null;
  login: (username: string, password: string, role: string, id: number) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string, role: string, id: number) => {
    setUser({ username, password, role, id });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};