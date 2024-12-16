import React, { useContext} from 'react'
import { AuthContext } from '../Context/UserContextReducer';

const Home = () => {
      const authContext = useContext(AuthContext);
    
      if (!authContext) {
        throw new Error('Login must be used within an AuthProvider');
      }
  return (
    <div>Home</div>
  )
}

export default Home