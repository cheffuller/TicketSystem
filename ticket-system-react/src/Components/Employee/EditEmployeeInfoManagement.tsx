import React, { FormEvent, useEffect, useState } from 'react';
import axios, { HttpStatusCode } from 'axios';
import EditEmployeeInfo from './EditEmployeeInfo';

type EditEmployeeInfoManagementProps = {
  userID: number | null | undefined;
}

const EditEmployeeInfoManagement = ({ userID }: EditEmployeeInfoManagementProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState(0);
  const [editEnabled, setEditEnabled] = useState(true);
  const [message, setMessage] = useState('');
  const employeeID = userID;

  useEffect(() => {
    if (employeeID) {
      (async () => {
        try {
          const res = await axios.get(
            `http://localhost:5000/api/employee/${employeeID}`
          );
          setFirstName(res.data.firstName || '');
          setLastName(res.data.lastName || '');
          setAddress(res.data.address || '');
          setCity(res.data.city || '');
          setZipCode(res.data.zipCode || 0);
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [employeeID]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    type employeeInfoProps = {
      firstName: string;
      lastName: string;
      address: string;
      city: string;
      zipCode: number;
    };

    const employeeInfo: employeeInfoProps = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      zipCode: zipCode,
    };

    try {
      const res = await axios.put(
        `http://localhost:5000/api/employee/${employeeID}`,
        employeeInfo
      );
      if (res.status === HttpStatusCode.Ok) {
        setMessage("Employee edited succesfully");
      };
    } catch (err) {}
  };

  return (
    <>
      <EditEmployeeInfo
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        address={address}
        setAddress={setAddress}
        city={city}
        setCity={setCity}
        zipCode={zipCode}
        setZipCode={setZipCode}
        handleSubmit={handleSubmit}
        editEnabled={editEnabled}
        setEditEnabled={setEditEnabled}
        message={message}
      />
    </>
  );
};

export default EditEmployeeInfoManagement;
