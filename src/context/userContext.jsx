import React, { createContext, useState, useEffect } from 'react';

export const TokenContext = createContext({
  token: "No Token",
  setToken: () => {},
  userName: "No User",
  setUserName: () => {}
});

export const TokenProvider = ({ children }) => {
  // State to hold the token and user name
  const [token, setToken] = useState(() => {
    // Retrieve token from local storage when the component initializes
    const storedToken = localStorage.getItem('token');
    return storedToken || 'No Token';
  });

const [userName, setUserName] = useState(() => {
    const storedUserName = localStorage.getItem('userName');
    return storedUserName || 'No User';
  });
  

  // Function to update the token
  const updateToken = (newToken) => {
    // Update token state
    setToken(newToken);
    // Store token in local storage
    localStorage.setItem('token', newToken);
  };

  // Function to update the user name
  const updateUserName = (newUserName) => {
    // Update user name state
    setUserName(newUserName);
    // Store user name in local storage
    localStorage.setItem('userName', newUserName);
  };

  // Remove token and user name from local storage when the component unmounts
  useEffect(() => {
    return () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
    };
  }, []);

  // Provide the token state, user name, and update functions to the children components
  return (
    <TokenContext.Provider value={{ token, userName, updateToken, setToken,setUserName, updateUserName }}>
      {children}
    </TokenContext.Provider>
  );
};
