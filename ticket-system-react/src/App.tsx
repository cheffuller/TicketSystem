import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LoginManagement from './Components/Login/LoginManagement';
import { AuthProvider } from './Components/Context/UserContextReducer';
import { EmployeeProvider } from './Components/Context/EmployeeContext';
import Home from './Components/Home/Home';
import Tickets from './Components/Tickets/Tickets';
import { TicketProvider } from './Components/Context/TicketContext';
import SubmitTicketManagement from './Components/Tickets/SubmitTicket/SubmitTicketManagement';
import ProcessTickets from './Components/Tickets/ProcessTickets/ProcessTickets';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <NavBar />
        <EmployeeProvider>
          <TicketProvider>
            <Routes>
              <Route path='/' element={<LoginManagement />} />
              <Route path='home' element={<Home />} />
              <Route path='ticket/submit' element={<SubmitTicketManagement />} />
              <Route path='tickets' element={<Tickets />} />
              <Route path='tickets/process' element={<ProcessTickets />} />
              <Route path='register' />
            </Routes>
          </TicketProvider>
        </EmployeeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
