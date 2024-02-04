
import React, { createContext, useState, useContext } from 'react';

const name = createContext();

const Nameprovider = ({ children }) => {
  const [namee, setnamee] = useState('');

  

  
  return (
    <>
      <name.Provider value={{ setnamee,namee}}>
        {children}
      </name.Provider>
    </>
  );
};

const useName = () => {
  const context = useContext(name);

  return context;
};

export { useName, Nameprovider };
