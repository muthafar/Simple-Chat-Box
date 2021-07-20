import React, { useState } from "react";
import { MessageProvider } from "../contexts/Message.context";
import { SideProvider } from "../contexts/Side.Context";
import Chat from "./Chat";
import "./ChatApp.css";
import MessageInput from "./MessageInput";
import Navbar from "./Navbar";

const ChatApp = () => {
  return (
    <div className="chat-app">
      <SideProvider>
        <MessageProvider>
          <Navbar />
          <Chat />
          <MessageInput />
        </MessageProvider>
      </SideProvider>
    </div>
  );
};

export default ChatApp;
