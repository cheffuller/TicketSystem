import React from 'react';
import { Ticket } from '../Context/TicketContext';
import CurrencyFormatter from '../Util/CurrencyFormatter';

const TicketCard = (ticket: Ticket) => {
  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <small>Ticket ID: </small>
          <b>{ticket.ticketID}</b>
        </div>
        <div className='card-body'>
          {ticket.description}
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><small>Amount: </small>
          <CurrencyFormatter amount={ticket.amount} /></li>
          <li className='list-group-item'><small>Employee ID: </small>{ticket.employeeID}</li>
          <li className='list-group-item'><small>Type: </small>{ticket.type}</li>
          <li className='list-group-item'><small>Status: </small>{ticket.status}</li>
        </ul>
      </div>
    </>
  );
};

export default TicketCard;
