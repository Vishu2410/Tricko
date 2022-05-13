import React from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css";
import ActionProvider from "./Chatbot/ActionProvider";
import MessageParser from "./Chatbot/MessageParser";
import config from "./Chatbot/config";

export default function chatbot() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          
        />
      </header>
    </div>
  );
}
