import React from 'react';
import TextInput from '../Util/TextInput';

const LoginForm = () => {
  return (
    <>
    <div className='mt-5'>
    <h5>Employee Login</h5>
      <div className='login-form mt-3'>
        <form className='container'>
          <div className='row mb-3'>
            <label htmlFor='inputUsername' className='col-sm-2 col-form-label'>
              Username
            </label>
            <div className='col-sm-10'>
              <input type='text' className='form-control' id='inputUsername' />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputPassword' className='col-sm-2 col-form-label'>
              Password
            </label>
            <div className='col-sm-10'>
              <input
                type='password'
                className='form-control'
                id='inputPassword'
              />
            </div>
          </div>
          
          <button type='submit' className='btn btn-primary'>
            Sign in
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default LoginForm;
