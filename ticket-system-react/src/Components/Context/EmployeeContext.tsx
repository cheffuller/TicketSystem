import React, { ReactNode, useContext, useState } from "react";

interface Employee {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: number;
  role: string;
  id: number;
}

interface EmployeeContextType {
  employee: Employee | null;
  setEmployee: React.Dispatch<React.SetStateAction<Employee | null>>;
}

interface EmployeeProviderProps {
  children: ReactNode;
}

const EmployeeContext = React.createContext<EmployeeContextType>({
  employee: null,
  setEmployee: () => {}
});

export const EmployeeProvider: React.FC<EmployeeProviderProps> = ({ children }) => {
  const [employee, setEmployee] = useState<Employee | null>(null);

  return (
    <EmployeeContext.Provider value={{ employee, setEmployee }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export const useEmployeeContext = () => useContext(EmployeeContext);
