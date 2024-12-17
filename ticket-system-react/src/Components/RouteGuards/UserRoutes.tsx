import React, { ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContextReducer';


const UserRoutes = ({children}: {children: ReactNode}) => {
    const userContext = useContext(UserContext);
    const isAuthenticated: boolean = userContext?.state.user ? true : false;

    if (!isAuthenticated){
        return <Navigate to="/" replace />
    }

  return (
    <>{children}</>
  )
}

export default UserRoutes