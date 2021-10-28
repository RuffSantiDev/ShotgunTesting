import React from "react";

export const DrawCard = (props) => {

function handleClick(){
  props.generateCard();
}


  return (
    <div className="DrawCard">
      <h1>Do you want to draw your Card?</h1>

      <button onClick={handleClick()} >DRAW!</button>
      
    </div>
  )
}