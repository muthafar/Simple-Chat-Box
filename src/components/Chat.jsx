import React, { useContext } from "react";
import "./Chat.css";
import MessageList from "./MessageList";
import { SideContext } from "../contexts/Side.Context";

const Chat = () => {
  const { isOpen, toggleSide } = useContext(SideContext);

  return (
    <>
      {isOpen ? (
        <main className="main">
          <MessageList />

          <aside className="hidden-box">
            <p onClick={toggleSide} className="close-entity">
              &gt;&gt;
            </p>
            <div className="user-info">
              <p>
                <strong>Name</strong>
              </p>
              <p>Samia</p>
              <p>
                <strong>Age</strong>
              </p>
              <p>29</p>
            </div>
            <img
              className="user-img"
              src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/19216622/000115.jpg"
              alt=""
            />
          </aside>
        </main>
      ) : (
        <main className="open-main">
          <MessageList />
          <aside className="open-box">
            <p onClick={toggleSide} className="open-entity">
              &lt;&lt;
            </p>
          </aside>
        </main>
      )}
    </>
  );
};

export default Chat;
