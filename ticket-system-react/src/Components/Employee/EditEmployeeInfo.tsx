import React from 'react';

type EditEmployeeInfoProps = {
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  zipCode: number;
  setZipCode: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: any;
  editEnabled: boolean;
  setEditEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
};

const EditEmployeeInfo = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  address,
  setAddress,
  city,
  setCity,
  zipCode,
  setZipCode,
  handleSubmit,
  editEnabled,
  setEditEnabled,
  message,
}: EditEmployeeInfoProps) => {
  return (
    <>
      <h6 className='my-4'>
        Employee Info
        <input
          className='ms-3'
          id='register'
          type='checkbox'
          checked={!editEnabled}
          onChange={() => setEditEnabled(!editEnabled)}
        />
        <label className='form-check-label ms-1' htmlFor='register'>
          Edit
        </label>
      </h6>
      <form className='container ticket-form' onSubmit={handleSubmit}>
        <div className='form-check'></div>
        <div className='row mb-3'>
          <label htmlFor='inputFirstName' className='col-sm-3 col-form-label'>
            First Name:
          </label>
          <div className='col-sm-9'>
            <input
              type='text'
              className='form-control'
              id='inputFirstName'
              value={firstName}
              disabled={editEnabled}
              onChange={(e: any) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputLastName' className='col-sm-3 col-form-label'>
            Last Name:
          </label>
          <div className='col-sm-9'>
            <input
              type='text'
              className='form-control'
              id='inputLastName'
              value={lastName}
              disabled={editEnabled}
              onChange={(e: any) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputAddress' className='col-sm-3 col-form-label'>
            Address:
          </label>
          <div className='col-sm-9'>
            <input
              type='text'
              className='form-control'
              id='inputAddress'
              value={address}
              disabled={editEnabled}
              onChange={(e: any) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputCity' className='col-sm-3 col-form-label'>
            City:
          </label>
          <div className='col-sm-9'>
            <input
              type='text'
              className='form-control w-50'
              id='inputCity'
              value={city}
              disabled={editEnabled}
              onChange={(e: any) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputZipCode' className='col-sm-3 col-form-label'>
            Zip Code:
          </label>
          <div className='col-sm-9'>
            <input
              type='text'
              className='form-control w-50'
              id='inputZipCode'
              value={zipCode}
              disabled={editEnabled}
              onChange={(e: any) => setZipCode(e.target.value)}
            />
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      {message && <div className='mb-3'>{message}</div>}
    </>
  );
};

export default EditEmployeeInfo;
