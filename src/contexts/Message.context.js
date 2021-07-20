import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const MessageContext = createContext();

const data = [
  { id: uuidv4(), content: "Schedule an appointment", owner: false },
  {
    id: uuidv4(),
    content: "Scheduled the appointment for the next week",
    owner: true,
  },
  { id: uuidv4(), content: "that was really helpful!", owner: false },
  { id: uuidv4(), content: "Great service", owner: false },
  { id: uuidv4(), content: "Thanks!", owner: true },
];

export const MessageProvider = (props) => {
  const [messages, setMessages] = useState(data);

  const addMessage = (message) => {
    setMessages([...messages, { id: uuidv4(), content: message, owner: true }]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {props.children}
    </MessageContext.Provider>
  );
};
