import React from 'react';

type SubmitTicketFormProps = {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: any;
  ticketTypeOptions: string[];
  message: string;
};

const SubmitTicketForm = ({
  description,
  setDescription,
  amount,
  setAmount,
  type,
  setType,
  handleSubmit,
  ticketTypeOptions,
  message
}: SubmitTicketFormProps) => {
  return (
    <>
      <h5 className='mb-3'>Submit Ticket</h5>
      {message && (<div className='mb-3'>{message}</div>)}
      <form className='container ticket-form' onSubmit={handleSubmit}>
        <div className='row mb-3'>
          <label htmlFor='inputDescription' className='col-sm-3 col-form-label'>
            Description
          </label>
          <div className='col-sm-9'>
            <textarea
              
              className='form-control'
              id='inputDescription'
              value={description}
              onChange={(e: any) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputAmount' className='col-sm-3 col-form-label'>
            Amount
          </label>
          <div className='col-sm-9'>
            <input
              type='text'
              className='form-control w-50'
              id='inputAmount'
              value={amount}
              onChange={(e: any) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputType' className='col-sm-3 col-form-label'>
            Type
          </label>
          <div className='col-sm-9'>
            <select className='form-control' value={type} onChange={(e: any) => setType(e.target.value)}>
              <option value={type}>{type}</option>
              {ticketTypeOptions.map((option, index) => {
                    return (
                        <option key={index} value={ticketTypeOptions[index]}>
                            {option}
                        </option>
                    );
                })}
            </select>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
              Submit
            </button>
      </form>
    </>
  );
};

export default SubmitTicketForm;
