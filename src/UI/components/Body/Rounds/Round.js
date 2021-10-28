import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react";

import { EnterGuess } from "./Parts/EnterGuess";
// import { selectPlayer } from "./roundSlice";

import './Round.css'

// Round contains everything that is needed for every Round.
// Need to create a loop, which lets every player enter his guess




export const Round = () => {

  const players = useSelector(state => state.game.players);
  const currentRound = useSelector((state) => state.game.currentRound);
  const numberOfPlayers = useSelector((state) => state.game.numberOfPlayers);

  const [countPlayerSubmits, setPlayerSubmits] = useState(1);
  const [currentPlayerIndex, setcurrentPlayerIndex] = useState(0);

  useEffect(() => {
    RenderEnterGuessPrompt();
  }, [currentPlayerIndex]);

  function EnterGuessLoop() {
    for(let i=0; i < players.length; i++){
      let player = players[i];
      return <EnterGuess player={player} />
    }
  }



  function togglePlayerIndex(){
    let i = currentPlayerIndex;
    if(currentPlayerIndex < (numberOfPlayers-1)){
      i++;
      setcurrentPlayerIndex(i);
    } else {
    }
  }


  function RenderEnterGuessPrompt(){
    const player = players[currentPlayerIndex];
    return <EnterGuess player={player} toggleNextPlayer={togglePlayerIndex} />   
  }
    
    return(
      <div className="Round" >
        <h2> Round {currentRound} </h2>
        {/* {EnterGuessLoop()} */}
        {/* {players.map(player => {
            return <EnterGuess className="EnterPlayerName" key={player.id} player={player} name={player.name} />
          })} */}
        {RenderEnterGuessPrompt()}

      </div>
    )
}