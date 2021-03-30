import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://filmdaily.co/wp-content/uploads/2020/07/EDinsta-lede-1300x954.jpg",
      message: "Whats up",
    },
    {
      name: "Ellen",
      image:
        "https://filmdaily.co/wp-content/uploads/2020/07/EDinsta-lede-1300x954.jpg",
      message: "YOO how its going",
    },
    {
      message: "Hi! How are you Ellen!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault(); // prevents refreshing

    setMessages([...messages, { message: input }]);
    setInput(""); // Empties the input after pressing after hitting enter
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 30/03/2021
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          className="chatScreen__inputButton"
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
