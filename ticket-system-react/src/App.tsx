import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LoginForm from './Components/Login/LoginForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
      </Routes>
    </div>
  );
}

export default App;
