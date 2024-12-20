import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Ticket } from '../../Context/TicketContext';
import { UserContext } from '../../Context/UserContextReducer';
import ViewTickets from './ViewTickets';

const ViewTicketsManagement = () => {
  const [tickets, setTickets] = useState<Ticket[] | null>(null);
  const userContext = useContext(UserContext);
  const employeeID = userContext?.state.user?.id;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/tickets/employee/${employeeID}`
        );
        setTickets(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [employeeID]);

  return (
    <div>
        <ViewTickets tickets={tickets}/>
    </div>
  );
};

export default ViewTicketsManagement;