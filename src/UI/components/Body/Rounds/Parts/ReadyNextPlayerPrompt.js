import React from "react";

export const ReadyNextPlayerPrompt = (props) => {

function handleClick(){
props.playerReadyToGuess();
}


  return (
    <div className="ReadyNextPlayerPrompt">
      
      <p> {props.player.name}, are you ready to guess ? </p>
    
      <button onClick={handleClick()} >I'm ready!</button>
      
    </div>
  )
}