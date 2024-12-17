import React, { createContext, ReactNode, useReducer, useContext } from 'react';
import { User } from './UserContext';

interface UserState {
  user: User | null;
}

type UserAction = { type: 'LOGIN'; payload: User } | { type: 'LOGOUT' };

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      throw new Error(`Unhandled action type: ${(action as UserAction).type}`);
  }
};

interface UserContextType {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

const initialUserState: UserState = { user: null };

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(UserContext);
  if(!context){
    throw new Error('useAuth must be used within an UserProvicer');
  }
  return context;
}