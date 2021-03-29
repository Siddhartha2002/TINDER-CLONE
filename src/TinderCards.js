import React, { useState } from "react";
import "./TinderCards.css";

function TinderCards() {
  // Way to deeclare a variable in react
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url:
        "https://cdn.vox-cdn.com/thumbor/DVN7eqE1o8HeBOP-jg15YHTsiLY=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg",
    },
    {
      name: "Mark Zuckerburg",
      url:
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_962130392_2000133320009280233_380105.jpg",
    },
  ]);

  return (
    <div className="tinderCards">
      {people.map((person) => (
        <TinderCards>
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCards>
      ))}
    </div>
  );
}

export default TinderCards;
