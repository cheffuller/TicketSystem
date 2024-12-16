import React, { useContext } from 'react';
import ProcessTicketsManagement from './ProcessTickets/ProcessTicketsManagement';
import { AuthContext } from '../Context/UserContextReducer';
import SubmitTicketManagement from './SubmitTicket/SubmitTicketManagement';

const Tickets = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('Login must be used within an AuthProvider');
  }
  console.log(authContext);

  return (
    <div>
      Tickets
      {/* <ProcessTicketsManagement /> */}
      <SubmitTicketManagement />
    </div>
  );
};

export default Tickets;
