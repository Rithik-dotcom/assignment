import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
