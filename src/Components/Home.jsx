import React, { useContext } from 'react'

import {TokenContext} from '../context/userContext'
import '../App.css'
const Home = () => {
  const {token} =useContext(TokenContext)
  return (
<div className='App'>

     

      <div><p>{token}</p></div>
      <div><a href="/login">Login</a></div>
      <div><a href="/register">Register</a></div>
    </div>

  )
}

export default Home