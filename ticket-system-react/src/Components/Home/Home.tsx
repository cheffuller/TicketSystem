import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContextReducer';
import EditEmployeeInfoManagement from '../Employee/EditEmployeeInfoManagement';

const Home = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('Login must be used within an UserProvider');
  }
  return (
    <>
      <h5>
        Hello {userContext.state.user?.username}, welcome to your Ticket System!
      </h5>
      <div className='container'>
        <EditEmployeeInfoManagement userID={userContext.state.user?.id} />
      </div>
    </>
  );
};

export default Home;
