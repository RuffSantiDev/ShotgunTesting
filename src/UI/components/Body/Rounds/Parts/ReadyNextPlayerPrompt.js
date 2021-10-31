import React from "react";

export const ReadyNextPlayerPrompt = (props) => {

function handleClick(){
  props.toggleNextPlayerPrompt();

}


  return (
    <div className="ReadyNextPlayerPrompt">
      
      <h3> {props.player.name},<br /> are you ready to guess? </h3>
    
      <button onClick={handleClick} >I'm ready!</button>
      
    </div>
  )
}