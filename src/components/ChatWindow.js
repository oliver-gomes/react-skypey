import React from "react";
import store from "../store";
import Header from "./Header";
import Chats from "./Chats";
import MessageInput from "../containers/MessageInput";
import _ from "lodash";
import "./ChatWindow.css";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const { typing } = state;

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;
