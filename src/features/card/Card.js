import React from "react";

import '../../UI/css/Card.css';

export const Card = (props) => {

  const cards = props.cards;
  const cardIndex = props.currentRound -1;
  const cardValue = cards[cardIndex];


  return (
    <div className="cardContainer">
      <button className="Card">
        <div className="cardValue" >
          <h3>{cardValue}</h3>
        </div>
      </button>
    </div>
      
  )

}