import React, { FormEvent, useContext, useState } from 'react';
import { UserContext } from '../Context/UserContextReducer';
import LoginForm from './LoginForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginManagement = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);
  const [response, setResponse] = useState('');

  const userContext = useContext(UserContext);

  const navigate = useNavigate();

  if (!userContext) {
    throw new Error('Login must be used within an AuthProvider');
  }

  const { dispatch } = userContext;

  const handleChange = () => {
    setRegister(!register);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!username || !password) {
      return;
    }

    const empData = {
      username: username,
      password: password,
    };

    if (!register) {
      try {
        const res = await axios.post(
          `http://localhost:5000/employee/login`,
          empData
        );
        const role = res.data.role;
        const id = res.data.id;
        dispatch({ type: 'LOGIN', payload: { username, password, role, id } });
        navigate('/home');
      } catch (err: any) {
        console.log(err);
        setResponse(err.response.data);
      }
    } else {
      try {
        const res = await axios.post(
          `http://localhost:5000/employee/register`,
          empData
        );
        setResponse('Registration Successful!')
      } catch (err: any) {
        setResponse('Username exists in database');
      }
      setRegister(!register);
    }
    setUsername('');
    setPassword('');
    console.log(userContext);
  };

  return (
    <>
      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        register={register}
        handleChange={handleChange}
        response={response}
      ></LoginForm>
    </>
  );
};

export default LoginManagement;
