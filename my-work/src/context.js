import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  // const [cartValue, setCartValue] = useState(0);

  const openModal = () => {
    setCartOpen(true);
  };
  const closeModal = () => {
    setCartOpen(false);
  };

  return (
    <AppContext.Provider value={{ isCartOpen, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
