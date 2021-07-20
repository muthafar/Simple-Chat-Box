import React, { createContext, useState } from "react";

export const SideContext = createContext();

export const SideProvider = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SideContext.Provider value={{ isOpen, toggleSide }}>
      {props.children}
    </SideContext.Provider>
  );
};
