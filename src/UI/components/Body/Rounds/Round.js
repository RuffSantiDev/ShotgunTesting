import React from "react";
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";

import { EnterGuess } from "./Parts/EnterGuess";
// import { selectPlayer } from "./roundSlice";
import { DrawCardPrompt } from "./Card/DrawCardPrompt";
import { ReadyNextPlayerPrompt } from "./Parts/ReadyNextPlayerPrompt";

import './Round.css'

// Round contains everything that is needed for every Round.
// Need to create a loop, which lets every player enter his guess




export const Round = () => {

  const players = useSelector(state => state.game.players);
  const cards = useSelector(state => state.game.cards);
  const currentRound = useSelector((state) => state.game.currentRound);
  const numberOfPlayers = useSelector((state) => state.game.numberOfPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [showEnterGuessPrompt, setShowEnterGuessPrompt] = useState(true);
  const [showMidScreen, setShowMidScreen] = useState(true);
  const [showDrawCardPrompt, setShowDrawCardPrompt] = useState(false);
  const [roundActive, setRoundActive] = useState(true);
  let [currentPlayer, setCurrentPlayer] = useState();

  useEffect(() => {
    renderEnterGuessPrompt();
  }, [currentPlayerIndex, showEnterGuessPrompt]);

  useEffect(() => {
    renderDrawCardPrompt();
  }, [showDrawCardPrompt]);




  function renderEnterGuessPrompt(){
    while(showEnterGuessPrompt === true && currentPlayerIndex < numberOfPlayers) {
        currentPlayer = players[currentPlayerIndex];
        return <EnterGuess player={currentPlayer} submitGuess={submitGuess} />
      }
  }



  function submitGuess(){
    let i = currentPlayerIndex;
      i++;
      setCurrentPlayerIndex(i);  
      if (currentPlayerIndex === numberOfPlayers) {
        setShowEnterGuessPrompt(false);
      };
      
      console.log('this is the current player index: '+ currentPlayerIndex);
      // setShowEnterGuessPrompt(false);
      // setShowMidScreen(true);

  }





  
    function renderNextPlayerPrompt(){
      if(showMidScreen===true){
        currentPlayer = players[currentPlayerIndex];
        return <ReadyNextPlayerPrompt player={currentPlayer} playerReadyToGuess={playerReadyToGuess} />   
      }
    }

    function playerReadyToGuess(){
      setShowEnterGuessPrompt(true);
      // setShowMidScreen(false);
    }

  function drawCard(){
    setShowDrawCardPrompt(false);
  }

  function renderDrawCardPrompt(){
    while(showDrawCardPrompt === true){
      return <DrawCardPrompt drawCard={drawCard} />
    }
  }


    
  return(
    <div className="Round" >
      <h2> Round {currentRound} </h2>
      {renderEnterGuessPrompt()}
      {renderNextPlayerPrompt()}
    </div>
  )
}