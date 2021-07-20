import React, { useContext } from "react";
import { MessageContext } from "../contexts/Message.context";
import "./Message.css";

const Message = ({ message }) => {
  const { owner: isOwner } = message;
  return (
    <div class="bubbleWrapper">
      <div class={isOwner ? "inlineContainer own" : "inlineContainer"}>
        <div class={isOwner ? "ownBubble own" : "otherBubble other"}>
          {message.content}
        </div>
      </div>
    </div>
  );
};

export default Message;
