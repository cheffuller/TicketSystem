import React from 'react';
import { Ticket } from '../Context/TicketContext';

const TicketCard = (ticket: Ticket) => {
  return (
    <>
      <div className='p-3 card'>
        Ticket ID: {ticket.ticketID}<br/>
        Description: {ticket.description}<br/>
        Amount: {ticket.amount}<br/>
        Employee ID: {ticket.employeeID}<br/>
        Type: {ticket.type}<br/>
        Status: {ticket.status}<br/>

        </div>
    </>
  );
};

export default TicketCard;
