"use client";
import React from "react";
import { useState } from "react";

import Navbar from "./Navbar";
import FromUser from "../ui/FromUser";
import FromBot from "../ui/FromBot";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessage = (content, sender) => {
    setMessages([...messages, { text:content, sender }]);
    setMessage("");
  };

  const receiveMessage = (content) => {
    sendMessage(content, "bot");
  };

  return (
    <>
      <div className="w-full h-14 bg-[#212121]">
        <Navbar />
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textbar h-12 w-2/3 border-2 border-[#303030] bg-transparent rounded-2xl left-1/4 bottom-4 fixed text-center text-white "
            placeholder="How are you feeling today?"
          ></input>
          <button onClick={() => sendMessage(message, 'sender')}>
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-[#212121] rounded-md bg-white text-xl border-2 border-white p-1 fixed right-64 bottom-6 hover:border-black "
            />
          </button>
        </div>
      </div>
      <div
        id="Chat-area"
        className="w-full h-full bg-[#212121] text-white p-1 "
      >
        {messages.map((message, index) => (
          <div key={index} className="p-2 text-sm text-gray-700">
            {message.sender === "bot" ? <FromBot /> : <FromUser message={message.text}></FromUser>}
          </div>
        ))}
        <button className="text-white border-2 border-red-500" onClick={receiveMessage}> Test Button</button>
      </div>
    </>
  );
}

export default Chat;
