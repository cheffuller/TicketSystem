import React from 'react';

type LoginFormProps = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: any;
  register: boolean;
  handleChange: any;
  response: string
};

const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit,
  register,
  handleChange,
  response
}: LoginFormProps) => {
  return (
    <>
      <div className='mt-5'>
        <h5>Employee Login</h5>
        <div className='login-form mt-3'>
          <form className='container' onSubmit={handleSubmit}>
            <div className='row mb-3'>
              <label
                htmlFor='inputUsername'
                className='col-sm-2 col-form-label'
              >
                Username
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  id='inputUsername'
                  value={username}
                  onChange={(e: any) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className='row mb-3'>
              <label
                htmlFor='inputPassword'
                className='col-sm-2 col-form-label'
              >
                Password
              </label>
              <div className='col-sm-10'>
                <input
                  type='password'
                  className='form-control'
                  id='inputPassword'
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type='submit' className='btn btn-primary'>
              Sign in
            </button>
            <div className='mt-3'>Not an existing user?</div>
              <div className='form-check form-switch'>
                <input
                  className=''
                  id='register'
                  type='checkbox'
                  checked={register}
                  onChange={handleChange}
                />
                <label className='form-check-label ms-1' htmlFor='register'>
                  Register
                </label>
                <p className='mt-5 response'>{response}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
