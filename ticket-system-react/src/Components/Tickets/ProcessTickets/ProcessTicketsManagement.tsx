import React, { useEffect, useState } from 'react';
import { Status, Ticket } from '../../Context/TicketContext';
import axios from 'axios';

import ProcessTickets from './ProcessTickets';

const ProcessTicketsManagement = () => {
  const [pendingTickets, setPendingTickets] = useState<
    Ticket[] | null | undefined
  >(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/tickets/pending`
        );
        setPendingTickets(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const removeTicket = (id: number) => {
    setPendingTickets(
      pendingTickets?.filter((ticket) => ticket.status === Status.Pending)
    );
  };

  const handleClick = async (ticket: Ticket, newStatus: Status) => {
    ticket.status = newStatus;
    try {
      const res = await axios.put(
        `http://localhost:5000/api/tickets/process/${ticket.ticketID}`,
        ticket
      );
      setMessage(`Ticket ${res.data.ticketID} was ${res.data.status}`);
    } catch (err) {
      console.log(err);
    }
    removeTicket(ticket.ticketID);
  };

  return (
    <>
      <ProcessTickets
        message={message}
        pendingTickets={pendingTickets}
        handleClick={handleClick}
      />
    </>
  );
};

export default ProcessTicketsManagement;
