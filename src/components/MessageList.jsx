import React, { useContext } from "react";
import { MessageContext } from "../contexts/Message.context";
import Message from "./Message";
import "./MessageList.css";

const MessageList = () => {
  const { messages } = useContext(MessageContext);

  return (
    <>
      <section className="chat-screen">
        {messages.map((message) => {
          return <Message message={message} />;
        })}
      </section>
    </>
  );
};

export default MessageList;
