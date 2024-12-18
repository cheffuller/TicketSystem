import React from 'react'
import { Status, Ticket } from '../../Context/TicketContext';
import TicketCard from '../TicketCard';

type ProcessTicketsProps = {
  pendingTickets: Ticket[] | null | undefined;
  handleClick: any
}

const ProcessTickets = ({pendingTickets, handleClick}: ProcessTicketsProps) => {
  return (
    <><div className='container'>
    Process Tickets
    <div className='row row-cols-lg-5 g-2 g-lg-3'>
      {pendingTickets?.map((ticket) => (
        <div key={ticket.ticketID}>
          <TicketCard {...ticket} />
          <button className='btn btn-success w-50 my-1 mx-auto' onClick={() => handleClick(ticket, Status.Accepted)}>
            Approve
          </button>
          <br />
          <button className='btn btn-danger w-50 my-1 mx-auto' onClick={() => handleClick(ticket, Status.Denied)}>Deny</button>
        </div>
      ))}
    </div>
  </div></>
  )
}

export default ProcessTickets