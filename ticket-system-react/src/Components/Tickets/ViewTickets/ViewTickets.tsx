import React from 'react';
import TicketCard from '../TicketCard';
import { Ticket } from '../../Context/TicketContext';

type ViewTicketsType = {
  tickets : Ticket[] | null;
}

const ViewTickets = ({tickets}: ViewTicketsType) => {

  return (
    <div>
      <h5 className='mb-3'>View Tickets</h5>
      <div className='container'>
        <div className='row row-cols-lg-5 g-2 g-lg-3'>
          {tickets?.map((ticket) => (
            <div key={ticket.ticketID}>
              <TicketCard {...ticket} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewTickets;
