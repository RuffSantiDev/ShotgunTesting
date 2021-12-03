import React from "react";

import { useState } from "react";

export const PlayerFinalResult = (props) => {

  const [hideButton, setHideButton] = useState(false);



  


  return (
    <div className="IndividualResults">
       
        <p className="name">{props.player.name}: </p>

        <p className="FinalScore">Overall Score: {props.player.currentScore}</p>


        <p>|</p>
      <p>Overall Drinks: </p>
      <p className="drinks">{props.player.sumOfDrinkUnits}</p>


    </div>
  )
}