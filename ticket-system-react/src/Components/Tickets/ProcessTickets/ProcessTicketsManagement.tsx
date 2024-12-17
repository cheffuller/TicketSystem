import React, { useEffect, useState } from 'react';
import { Ticket } from '../../Context/TicketContext';
import axios from 'axios';
import TicketCard from '../TicketCard';

const ProcessTicketsManagement = () => {
  const [pendngTickets, setPendingTickets] = useState<Ticket[] | null>(null);

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

  return (
    <div>
      ProcessTicketsManagement
      <div className='container'>
        <div className='row row-cols-lg-5 g-2 g-lg-3'>
          {pendngTickets?.map((ticket) => (
            <div key={ticket.ticketID}>
              <TicketCard {...ticket} />
              <button className='btn btn-success w-50 my-1 mx-auto'>
                Approve
              </button>
              <br />
              <button className='btn btn-danger w-50 my-1 mx-auto'>Deny</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTicketsManagement;
