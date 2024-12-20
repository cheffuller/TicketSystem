import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContextReducer';

const NavBar = () => {
  const userContext = useContext(UserContext);
  const isAuthenticated: boolean = userContext?.state.user ? true : false;
  const isManager: boolean =
    userContext?.state.user?.role === 'manager' ? true : false;

  const navigate = useNavigate();

  const handleLogout = () => {
    userContext?.dispatch({ type: 'LOGOUT' });
    navigate('/home');
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-5'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav m-auto mb-lg-0'>
              <Link className='navbar-brand' to='/'>
                TicketSystem
              </Link>
              {isAuthenticated && (
                <li className='nav-item mx-2'>
                  <Link className='nav-link' to='/home'>
                    Home
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className='nav-item mx-2'>
                  <Link className='nav-link' to='/tickets'>
                    Submit Ticket
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className='nav-item mx-2'>
                  <Link className='nav-link' to='/tickets/view'>
                    View Tickets
                  </Link>
                </li>
              )}
              {isManager && (
                <li className='nav-item mx-2'>
                  <Link className='nav-link' to='/tickets/process'>
                    Process Tickets
                  </Link>
                </li>
              )}
              <li className='nav-item'>
                {!isAuthenticated ? (
                  <Link className='nav-link active' aria-current='page' to='/'>
                    Login
                  </Link>
                ) : (
                  <Link
                    className='nav-link active'
                    aria-current='page'
                    to='/'
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
