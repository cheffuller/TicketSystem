import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LoginManagement from './Components/Login/LoginManagement';
import { UserProvider } from './Components/Context/UserContextReducer';
import { EmployeeProvider } from './Components/Context/EmployeeContext';
import Home from './Components/Home/Home';
import Tickets from './Components/Tickets/Tickets';
import { TicketProvider } from './Components/Context/TicketContext';
import SubmitTicketManagement from './Components/Tickets/SubmitTicket/SubmitTicketManagement';
import UserRoutes from './Components/RouteGuards/UserRoutes';
import ManagerRoutes from './Components/RouteGuards/ManagerRoutes';
import ProcessTicketsManagement from './Components/Tickets/ProcessTickets/ProcessTicketsManagement';
import ViewTickets from './Components/Tickets/ViewTickets/ViewTickets';

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
                element={<UserRoutes><SubmitTicketManagement /></UserRoutes>}
              />
              <Route path='tickets' element={<UserRoutes><Tickets /></UserRoutes>} />
              <Route path='tickets/process' element={<ManagerRoutes><ProcessTicketsManagement /></ManagerRoutes>} />
              <Route path='tickets/view' element={<UserRoutes><ViewTickets /></UserRoutes>} />
            </Routes>
          </TicketProvider>
        </EmployeeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
