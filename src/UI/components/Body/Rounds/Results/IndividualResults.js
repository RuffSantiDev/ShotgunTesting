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

function renderMultiplier(){
  if(props.player.currentMultiplier > 1){
    return (
      <div className="multiplier">
        <p>x{props.player.currentMultiplier}</p>
        <p className="points">{props.player.currentResult}</p>
      </div>
    )
  }
}

function renderDrinks(){

}

    return (
      <div className="IndividualResults">
          <p className="name">{props.player.name}: </p>
          <p>Points:</p>
          <p className="points">{props.player.currentPoints}</p>
          {renderMultiplier()}    
          <p>|</p>
          <p>DRINK</p>
          <p className="drinks">{props.player.currentDrinkUnits}</p>
          {renderButton()}
      </div>
    )
}