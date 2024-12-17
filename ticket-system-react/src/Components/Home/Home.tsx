import React, { useContext} from 'react'
import { UserContext } from '../Context/UserContextReducer';

const Home = () => {
      const userContext = useContext(UserContext);
    
      if (!userContext) {
        throw new Error('Login must be used within an UserProvider');
      }
  return (
    <div className="container">Home
    <div>
      Hello {userContext.state.user?.username}</div></div>
  )
}

export default Home