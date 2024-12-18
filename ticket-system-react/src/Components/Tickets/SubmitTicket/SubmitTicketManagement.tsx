import React, { FormEvent, useContext, useState } from 'react';
import SubmitTicket from './SubmitTicketForm';
import { UserContext } from '../../Context/UserContextReducer';
import { Status, Ticket } from '../../Context/TicketContext';
import axios from 'axios';

const SubmitTicketManagement = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('');

  const userContext = useContext(UserContext);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    type ticketDataProps = {
      description: string,
      amount: number,
      type: string,
      status: Status,
      employeeID: number | null | undefined
    }

    const ticketData: ticketDataProps = {
      description: description,
      amount: amount,
      type: type,
      status: Status.Pending,
      employeeID: userContext?.state.user?.id,
    };

    try {
      const res = await axios.post(`http://localhost:5000/ticket`, ticketData);
      
    } catch (err) {
      console.log(err);
    }
    setType('');
    setDescription('');
    setAmount(0);
  };

  return (
    <div>
      SubmitTicketManagement
      <SubmitTicket
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
        type={type}
        setType={setType}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SubmitTicketManagement;
