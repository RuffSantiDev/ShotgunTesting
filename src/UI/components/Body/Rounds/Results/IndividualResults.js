import React from "react";

import { useState } from "react";

export const IndividualResults = (props) => {

  const [hideButton, setHideButton] = useState(false);

function handleClick(){
  props.debtSettled();
  setHideButton(true);
}

function renderButton(){
  if(hideButton === false){
    return <button onClick={handleClick}  > Done! </button>
  }
}

    return (
      <div className="IndividualResults">
  
          <p className="name">{props.player.name}: </p>
          <p className="points">{props.player.currentPoints}</p>
          <p> points </p>
          <p>|</p>
        <p>DRINK: </p>
        <p className="drinks">{props.player.drinkUnits}</p>

       {renderButton()}
      </div>
    )
}