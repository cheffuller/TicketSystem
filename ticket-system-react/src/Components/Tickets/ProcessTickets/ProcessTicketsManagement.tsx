import React, { useEffect, useState } from 'react';
import { Status, Ticket } from '../../Context/TicketContext';
import axios from 'axios';

import ProcessTickets from './ProcessTickets';

const ProcessTicketsManagement = () => {
  const [pendingTickets, setPendingTickets] = useState<
    Ticket[] | null | undefined
  >(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:5000/ticket/pending`);
        setPendingTickets(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const removeTicket = (id: number) => {
    setPendingTickets(pendingTickets?.filter((ticket) => ticket.status === Status.Pending));
  };

  const handleClick = async (ticket: Ticket, newStatus: Status) => {
    ticket.status = newStatus;
    try {
      const res = await axios.put(
        `http://localhost:5000/ticket/process/${ticket.ticketID}`,
        ticket
      );
    } catch (err) {
      console.log(err);
    }
    removeTicket(ticket.ticketID);
  };

  return (
    <div>
      ProcessTicketsManagement
      <ProcessTickets
        pendingTickets={pendingTickets}
        handleClick={handleClick}
      />
    </div>
  );
};

export default ProcessTicketsManagement;
