import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  // Way to deeclare a variable in react
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url: "http://anthillonline.com/wp-content/uploads/2016/03/steve-jobs.jpg",
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
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
