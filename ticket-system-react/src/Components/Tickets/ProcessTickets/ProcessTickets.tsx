import React from 'react';
import { Status, Ticket } from '../../Context/TicketContext';
import TicketCard from '../TicketCard';

type ProcessTicketsProps = {
  message: string;
  pendingTickets: Ticket[] | null | undefined;
  handleClick: any;
};

const ProcessTickets = ({
  message,
  pendingTickets,
  handleClick,
}: ProcessTicketsProps) => {
  return (
    <>
      <div className='container'>
        <h5 className='mb-3'>Process Tickets</h5>
        {message && <div className='mb-3'>{message}</div>}
        <div className='row row-cols-lg-5 g-2 g-lg-3'>
          {pendingTickets?.map((ticket) => (
            <div key={ticket.ticketID}>
              <TicketCard {...ticket} />
              <button
                className='btn btn-success w-40 my-2 me-2'
                onClick={() => handleClick(ticket, Status.Accepted)}
              >
                Approve
              </button>
              <button
                className='btn btn-danger w-30 my-1 ms-2'
                onClick={() => handleClick(ticket, Status.Denied)}
              >
                Deny
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProcessTickets;
