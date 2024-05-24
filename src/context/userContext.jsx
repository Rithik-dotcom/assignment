import React, { createContext, useState, useEffect } from 'react';

export const TokenContext = createContext({
  token: "No Token",
  updateToken: () => null
});

export const TokenProvider = ({ children }) => {
  // State to hold the token
  const [token, setToken] = useState(() => {
    // Retrieve token from local storage when the component initializes
    const storedToken = localStorage.getItem('token');
    return storedToken || 'No Token';
  });

  // Function to update the token
  const updateToken = (newToken) => {
    // Update token state
    setToken(newToken);
    // Store token in local storage
    localStorage.setItem('token', newToken);
  };

  // Remove token from local storage when the component unmounts
  useEffect(() => {
    return () => localStorage.removeItem('token');
  }, []);

  // Provide the token state and update function to the children components
  return (
    <TokenContext.Provider value={{ token, updateToken }}>
      {children}
    </TokenContext.Provider>
  );
};
