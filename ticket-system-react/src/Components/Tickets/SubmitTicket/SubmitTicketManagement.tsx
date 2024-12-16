import React, { FormEvent, useContext, useState } from 'react';
import SubmitTicket from './SubmitTicketForm';
import { AuthContext } from '../../Context/UserContextReducer';
import { Status } from '../../Context/TicketContext';
import axios from 'axios';

const SubmitTicketManagement = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('');

  const authContext = useContext(AuthContext);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const ticketData = {
      description: description,
      amount: amount,
      type: type,
      status: Status.Pending,
      employeeID: authContext?.state.user?.id,
    };

    try {
      const res = await axios.post(`http://localhost:5000/ticket`, ticketData);
    } catch (err) {
      console.log(err);
    }
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
