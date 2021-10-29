import React from "react";
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";

import { EnterGuess } from "./Parts/EnterGuess";
// import { selectPlayer } from "./roundSlice";
import { DrawCardPrompt } from "./Card/DrawCardPrompt";
import { EnterGuessNextPlayer } from "./Parts/EnterGuessNextPlayer";

import './Round.css'

// Round contains everything that is needed for every Round.
// Need to create a loop, which lets every player enter his guess




export const Round = () => {

  const players = useSelector(state => state.game.players);
  const cards = useSelector(state => state.game.cards);
  const currentRound = useSelector((state) => state.game.currentRound);
  const numberOfPlayers = useSelector((state) => state.game.numberOfPlayers);
  const [playerSubmitCount, setplayerSubmitCount] = useState(0);
  const [showEnterGuessPrompt, setShowEnterGuessPrompt] = useState(true);
  const [showMidScreen, setShowMidScreen] = useState(false);
  const [showDrawCardPrompt, setShowDrawCardPrompt] = useState(false);
  const [roundActive, setRoundActive] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);

  // useEffect(() => {
  //   renderEnterGuessPrompt();
  // }, [playerSubmitCount]);

  // useEffect(() => {
  //   renderDrawCardPrompt();
  // }, [showDrawCardPrompt]);

  function renderRoundFlow(){
    while( roundActive === true ){
      while(showEnterGuessPrompt === true){
        return renderEnterGuessPrompt(currentPlayer);
      }
      while(showMidScreen === true){
        return renderMidScreen(currentPlayer);
      }

      

    }
  }

  function submitGuess(){
    let i = playerSubmitCount;
      i++;
      setplayerSubmitCount(i);
      console.log(playerSubmitCount);
      setShowEnterGuessPrompt(false);
      setCurrentPlayer(players[playerSubmitCount]);
      setShowMidScreen(true);

  }

  function renderEnterGuessPrompt(player){
      return <EnterGuess player={player} submitGuess={submitGuess} />   
    }
  

  function drawCard(){
    setShowDrawCardPrompt(false);
  }

  function renderDrawCardPrompt(){
    while(showDrawCardPrompt === true){
      return <DrawCardPrompt drawCard={drawCard} />
    }
  }

  function renderMidScreen(currentPlayer){
    return <EnterGuessNextPlayer player={currentPlayer} />
  }
    
  return(
    <div className="Round" >
      <h2> Round {currentRound} </h2>
      {/* {renderRoundFlow()} */}
      {renderEnterGuessPrompt(currentPlayer)}
      {renderMidScreen(currentPlayer)}
    </div>
  )
}