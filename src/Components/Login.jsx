// frontend/src/components/Login.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {TokenContext} from '../context/userContext'
const Login = () => {
  const Naviagte = useNavigate();

  const {token, setToken, setUserName} = useContext(TokenContext)
console.log(token)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', email); // Assuming email is used as the username
      setToken(response.data.token);
      setUserName(email); // Set the username in context
      Naviagte('/profile', true); // Redirect to the profile page
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
