import React from "react";

export const DrawCardPrompt = (props) => {

function handleClick(){
  // console.log('drawing card');
  props.drawCard();
  // props.drawCard();
}


  return (
    <div className="DrawCardPrompt">
    <h3>You have entered your guesses,<br />now draw the card!</h3>
      <button onClick={handleClick} >DRAW CARD!</button>
    </div>
  )
}