import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yoo speaking from facebook 🔥🔥"
        timestamp="40 seconds ago"
        profilePic="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/01/15/zuckprofpic.jpg?width=1200"
      />
      <Chat
        name="Jeff"
        message="Yoo speaking from Amazon 🚀"
        timestamp="10 seconds ago"
        profilePic="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
      />
      <Chat
        name="Steve"
        message="Yoo speaking from Apple 🍎🍎"
        timestamp="20 seconds ago"
        profilePic="https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
      />
      <Chat
        name="Elon"
        message="Yoo speaking from Tesla 🚗"
        timestamp="50 seconds ago"
        profilePic="https://i.pinimg.com/originals/18/fd/64/18fd644e9cdf81ab785d606584a384fb.jpg"
      />
      <Chat
        name="Ellen"
        message="Yoo speaking from The Ellen Show!!"
        timestamp="40 seconds ago"
        profilePic="https://filmdaily.co/wp-content/uploads/2020/07/EDinsta-lede-1300x954.jpg"
      />
    </div>
  );
}

export default Chats;
