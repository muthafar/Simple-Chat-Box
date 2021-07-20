import React, { useState, useContext } from "react";
import { MessageContext } from "../contexts/Message.context";

import "./MessageInput.css";

const MessageInput = () => {
  const [inputText, setInputtext] = useState("");
  const { addMessage } = useContext(MessageContext);

  return (
    <div className="message-input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMessage(inputText);
          setInputtext("");
        }}
      >
        <input
          value={inputText}
          onChange={(e) => setInputtext(e.target.value)}
          type="text"
          placeholder="Type a message.."
          className="input-field"
        />
      </form>
    </div>
  );
};

export default MessageInput;
