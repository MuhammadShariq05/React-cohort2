// Context.jsx
import React, { createContext, useState, useContext } from 'react';

// Create a context
const CounterContext = createContext();

// Create a provider component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // Wrap anyone that wants t0 use the teleported value inside a provider
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// Create a custom hook to use the counter context
export const useCounter = () => {
  return useContext(CounterContext);
};
