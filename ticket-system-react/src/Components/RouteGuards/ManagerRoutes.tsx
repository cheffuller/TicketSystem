import React, { ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContextReducer';


const ManagerRoutes = ({children}: {children: ReactNode}) => {
    const userContext = useContext(UserContext);
    const isManager: boolean = (userContext?.state.user?.role === "manager") ? true : false;

    if (!isManager){
        return <Navigate to="/" replace />
    }

  return (
    <>{children}</>
  )
}

export default ManagerRoutes