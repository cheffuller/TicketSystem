import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LoginManagement from './Components/Login/LoginManagement';
import { UserProvider } from './Components/Context/UserContextReducer';
import { EmployeeProvider } from './Components/Context/EmployeeContext';
import Home from './Components/Home/Home';
import { TicketProvider } from './Components/Context/TicketContext';
import SubmitTicketManagement from './Components/Tickets/SubmitTicket/SubmitTicketManagement';
import UserRoutes from './Components/RouteGuards/UserRoutes';
import ManagerRoutes from './Components/RouteGuards/ManagerRoutes';
import ProcessTicketsManagement from './Components/Tickets/ProcessTickets/ProcessTicketsManagement';
import ViewTicketsManagement from './Components/Tickets/ViewTickets/ViewTicketsManagement';
import EditEmployeeRolesManagement from './Components/Employee/EditEmployeeRolesManagement';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <NavBar />
        <EmployeeProvider>
          <TicketProvider>
            <Routes>
              <Route path='/' element={<LoginManagement />} />
              <Route
                path='home'
                element={
                  <UserRoutes>
                    <Home />
                  </UserRoutes>
                }
              />
              <Route
                path='ticket/submit'
                element={<UserRoutes><SubmitTicketManagement/></UserRoutes>}
              />
              <Route path='tickets' element={<UserRoutes><SubmitTicketManagement/></UserRoutes>} />
              <Route path='tickets/view' element={<UserRoutes><ViewTicketsManagement/></UserRoutes>} />
              <Route path='tickets/process' element={<ManagerRoutes><ProcessTicketsManagement/></ManagerRoutes>} />
              <Route path='employee/roles' element={<ManagerRoutes><EditEmployeeRolesManagement/></ManagerRoutes>} />
            </Routes>
          </TicketProvider>
        </EmployeeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
