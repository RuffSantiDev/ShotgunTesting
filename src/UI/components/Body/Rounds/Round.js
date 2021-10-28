import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import { EnterGuess } from "./Parts/EnterGuess";
import { selectPlayer } from "./roundSlice";

import './Round.css'

// Round contains everything that is needed for every Round.
// Need to create a loop, which lets every player enter his guess




export const Round = () => {

  const players = useSelector(state => state.game.players);
  const round = useSelector((state) => state.game.round);

  function EnterGuessLoop() {
    for(let i=0; i < players.length; i++){
      let player = players[i];
      return <EnterGuess player={player} />
    }
  }
    
    return(
      <div className="Round" >
        <h2> Round {round} </h2>
        {EnterGuessLoop()}
     
     
    
      </div>
    )
}