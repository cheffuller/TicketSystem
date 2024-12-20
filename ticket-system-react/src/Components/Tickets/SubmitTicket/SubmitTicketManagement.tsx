import React, { FormEvent, useContext, useState } from 'react';
import SubmitTicket from './SubmitTicketForm';
import { UserContext } from '../../Context/UserContextReducer';
import { Status } from '../../Context/TicketContext';
import axios from 'axios';

const SubmitTicketManagement = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('Other');
  const [message, setMessage] = useState('');
  const ticketTypeOptions: string[] = [
    "Travel", "Lodging", "Food"
  ]

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
      const res = await axios.post(`http://localhost:5000/api/tickets`, ticketData);
      setMessage(`Ticket ${res.data.ticketID} was submitted successfully`);
    } catch (err) {
      console.log(err);
      setMessage(`An error occurred when submitting your ticket`);
    }
    setType('Other');
    setDescription('');
    setAmount(0);
  };

  return (
    <>
      <SubmitTicket
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
        type={type}
        setType={setType}
        handleSubmit={handleSubmit}
        ticketTypeOptions={ticketTypeOptions}
        message={message}
      />
    </>
  );
};

export default SubmitTicketManagement;
