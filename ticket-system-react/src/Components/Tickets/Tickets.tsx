import React, { useContext } from 'react';
import ProcessTicketsManagement from './ProcessTickets/ProcessTicketsManagement';
import { UserContext } from '../Context/UserContextReducer';
import SubmitTicketManagement from './SubmitTicket/SubmitTicketManagement';

const Tickets = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('Login must be used within an AuthProvider');
  }
  console.log(userContext);

  return (
    <div>
      Tickets
      {/* <ProcessTicketsManagement /> */}
      <SubmitTicketManagement />
    </div>
  );
};

export default Tickets;
