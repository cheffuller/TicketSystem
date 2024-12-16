import React, { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../Context/UserContextReducer';
import LoginForm from './LoginForm';
import axios from 'axios';

const LoginManagement = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('Login must be used within an AuthProvider');
  }

  const { dispatch } = authContext;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!username || !password) {
      return;
    }

    const empData = {
      username: username,
      password: password,
    };

    try {
      const res = await axios.post(
        `http://localhost:5000/employee/login`,
        empData
      );
      const role = res.data.role;
      const id = res.data.id;
      dispatch({ type: 'LOGIN', payload: { username, password, role, id } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      ></LoginForm>
    </>
  );
};

export default LoginManagement;
