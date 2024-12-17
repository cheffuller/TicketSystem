import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import TicketCard from '../TicketCard';
import { Ticket } from '../../Context/TicketContext';
import { UserContext } from '../../Context/UserContextReducer';

const ViewTickets = () => {
  const [tickets, setTickets] = useState<Ticket[] | null>(null);
  const userContext = useContext(UserContext);
  const employeeID = userContext?.state.user?.id;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/ticket/employee/${employeeID}`
        );
        setTickets(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      ViewTickets
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
