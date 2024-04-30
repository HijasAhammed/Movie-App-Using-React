import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Login from './components/login';
import Signup from './components/signup';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <BrowserRouter>
   
      <Routes>
        <Route exact path="/" element={<Login users={users} />} />
        <Route path="/signup" element={<Signup setUsers={setUsers} />} />
        <Route path="/welcome" element={ <Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;