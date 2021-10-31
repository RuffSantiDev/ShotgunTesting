import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react";


import { EnterGuess } from "./Parts/EnterGuess";
import { Card } from "../../../../features/card/Card";
import { DrawCardPrompt } from "./Card/DrawCardPrompt";
import { ReadyNextPlayerPrompt } from "./Parts/ReadyNextPlayerPrompt";

import './Round.css'
import { updateCurrentPlayerIndex } from "../../../../features/game/gameSlice";

// Round contains everything that is needed for every Round.
// Need to create a loop, which lets every player enter his guess




export const Round = () => {
  const dispatch = useDispatch();


  const players = useSelector(state => state.game.players);
  const cards = useSelector(state => state.game.cards);
  const currentRound = Number(useSelector((state) => state.game.currentRound));
  const numberOfPlayers = Number(useSelector((state) => state.game.numberOfPlayers));
  const currentPlayerIndex = Number(useSelector((state) => state.game.currentPlayerIndex));
  const [showEnterGuessPrompt, setShowEnterGuessPrompt] = useState(false);
  const [showNextPlayerPrompt, setShowNextPlayerPrompt] = useState(true);
  const [showCard, setShowCard] = useState(false);
  const [roundActive, setRoundActive] = useState(true);

  // useEffect(() => {
  //   renderEnterGuessPrompt();
  // }, [currentPlayerIndex, showEnterGuessPrompt]);

  // useEffect(() => {
  //   renderDrawCardPrompt();
  // }, [showCard]);

  useEffect(() => {
    renderNextPlayerPrompt()
    renderEnterGuessPrompt()
    renderDrawCardPrompt()
    renderCard()
  }, [currentPlayerIndex, showCard, showNextPlayerPrompt, showEnterGuessPrompt]);




  function renderEnterGuessPrompt(){
    while(showEnterGuessPrompt === true && currentPlayerIndex < numberOfPlayers) {
        let currentPlayer = players[currentPlayerIndex];  
          return <EnterGuess player={currentPlayer} submitGuess={submitGuess} />
      }
  }



  function submitGuess(){
    let index = currentPlayerIndex;
    index++;
      dispatch(updateCurrentPlayerIndex(index));
      toggleNextPlayerPrompt();
  }


  function toggleNextPlayerPrompt(){
    if(currentPlayerIndex < numberOfPlayers){
      if(showEnterGuessPrompt === true && showNextPlayerPrompt === false){
        setShowEnterGuessPrompt(false);
      setShowNextPlayerPrompt(true);  
      } else if(showEnterGuessPrompt === false && showNextPlayerPrompt === true){
        setShowEnterGuessPrompt(true);
        setShowNextPlayerPrompt(false);
      } 
    } 
  }


  
    function renderNextPlayerPrompt(){
      if(showNextPlayerPrompt===true && currentPlayerIndex < numberOfPlayers){
        let currentPlayer = players[currentPlayerIndex];
        return <ReadyNextPlayerPrompt player={currentPlayer} toggleNextPlayerPrompt={toggleNextPlayerPrompt} />      
      }
    }

    function drawCard(){
      // console.log('drawing card');
      setShowCard(true);
    }

  function renderDrawCardPrompt(){
    if(currentPlayerIndex === numberOfPlayers && showCard === false){
      return <DrawCardPrompt drawCard={drawCard}  />
    }
  }

  function renderCard(){
    if(showCard === true){
      return <Card currentRound={currentRound} cards={cards}/>
    }
    
  }


    
  return(
    <div className="Round" >
      <h2> Round {currentRound} </h2>
      {/* {currentPlayerIndex}
      <br/> 
      {"showCard: " + showCard}
      <br/> 
      {"Number of Players: " + numberOfPlayers} */}
      {renderNextPlayerPrompt()}
      {renderEnterGuessPrompt()}
      {renderDrawCardPrompt()}
      {renderCard()}
    </div>
  )
}