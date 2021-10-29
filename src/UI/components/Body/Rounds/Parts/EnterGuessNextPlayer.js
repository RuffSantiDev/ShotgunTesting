import React from "react";

export const EnterGuessNextPlayer = (props) => {

function handleClick(){

}


  return (
    <div className="EnterGuessNextPlayer">
      <p>{props.player} is Next!</p>
      <p> Are you ready to guess {props.player}? </p>
    
      <button onClick={handleClick()} >I'm ready!</button>
      
    </div>
  )
}