import React from 'react';

type SubmitTicketFormProps = {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: any;
};

const SubmitTicketForm = ({
  description,
  setDescription,
  amount,
  setAmount,
  type,
  setType,
  handleSubmit,
}: SubmitTicketFormProps) => {
  return (
    <>
      <h5>SubmitTicket</h5>
      <form className='container' onSubmit={handleSubmit}>
        <div className='row mb-3'>
          <label htmlFor='inputDescription' className='col-sm-2 col-form-label'>
            Description
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              id='inputDescription'
              value={description}
              onChange={(e: any) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputAmount' className='col-sm-2 col-form-label'>
            Amount
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              id='inputAmount'
              value={amount}
              onChange={(e: any) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputType' className='col-sm-2 col-form-label'>
            Type
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              id='inputType'
              value={type}
              onChange={(e: any) => setType(e.target.value)}
            />
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
