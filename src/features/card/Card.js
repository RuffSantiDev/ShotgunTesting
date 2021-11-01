import React from "react";

import '../../UI/css/Card.css';

export const Card = (props) => {

  const cards = props.cards;
  const cardIndex = props.currentRound -1;
  const cardValue = cards[cardIndex];

  function handleClick(){
    props.toggleShowResults();
  }

  return (
    <div className="cardContainer">
      <div className="Card">
        <div className="cardValue" >
          <h3>{cardValue}</h3>
        </div>
      </div>
      <div>
      <button onClick={handleClick} > Show results!</button>
      </div>
      
    </div>
      
  )

}