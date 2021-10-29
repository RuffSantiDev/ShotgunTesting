import React from "react";

export const DrawCardPrompt = (props) => {

function handleClick(){
  console.log('drawing card');
  // props.drawCard();
}


  return (
    <div className="DrawCardPrompt">
      {/* <h1>Do you want to draw your Card?</h1> */}
    <p>You have entered your guesses, now draw the card!</p>
      <button onClick={handleClick()} >DRAW CARD!</button>
      
    </div>
  )
}