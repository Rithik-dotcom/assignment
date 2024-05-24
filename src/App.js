import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Profile from './Components/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" component={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
