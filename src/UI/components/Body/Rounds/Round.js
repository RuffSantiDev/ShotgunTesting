import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react";

import { EnterGuess } from "./Parts/EnterGuess";
import { Card } from "../../../../features/card/Card";
import { DrawCardPrompt } from "./Card/DrawCardPrompt";
import { ReadyNextPlayerPrompt } from "./Parts/ReadyNextPlayerPrompt";
import { Results } from "./Results/Results";
import './Round.css'

// import game actions
import { updateCurrentPlayerIndex, calculatePlayerResults, calculateDrinkUnits, toggleNextRound, resetCurrentPlayerIndex, determineWinnerByScore, determineWinnerByDrinks, deactivateGame } from "../../../../features/game/gameSlice";
// import { Results } from "../../../../features/Results/Results";

// Round contains everything that is needed for every Round.
// Need to create a loop, which lets every player enter his guess




export const Round = () => {
  const dispatch = useDispatch();

  const players = useSelector(state => state.game.players);
  const cards = useSelector(state => state.game.cards);
  const currentRound = Number(useSelector((state) => state.game.currentRound));
  const roundMax = useSelector(state => state.game.roundMax);
  const numberOfPlayers = Number(useSelector((state) => state.game.numberOfPlayers));
  const currentPlayerIndex = Number(useSelector((state) => state.game.currentPlayerIndex));
  const [showNextPlayerPrompt, setShowNextPlayerPrompt] = useState(true);
  const [showEnterGuessPrompt, setShowEnterGuessPrompt] = useState(false);
  const [showDrawCardPrompt, setShowDrawCardPrompt] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [roundActive, setRoundActive] = useState(true);
  

  // useEffect(() => {
  //   renderEnterGuessPrompt();
  // }, [currentPlayerIndex, showEnterGuessPrompt]);

  // useEffect(() => {
  //   renderDrawCardPrompt();
  // }, [showCard]);

  useEffect(() => {
    renderNextPlayerPrompt();
    renderEnterGuessPrompt();
    renderDrawCardPrompt();
    renderCard();
    renderResults();
  }, [currentPlayerIndex, showCard, showNextPlayerPrompt, showEnterGuessPrompt, showResults]);


  function renderNextPlayerPrompt(){
    if(showNextPlayerPrompt===true && currentPlayerIndex < numberOfPlayers){
      let currentPlayer = players[currentPlayerIndex];
      return <ReadyNextPlayerPrompt player={currentPlayer} toggleNextPlayerPrompt={toggleNextPlayerPrompt} />      
    }
  }

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
      setShowDrawCardPrompt(true);
      } else if(showEnterGuessPrompt === false && showNextPlayerPrompt === true){
        setShowEnterGuessPrompt(true);
        setShowNextPlayerPrompt(false);
        setShowDrawCardPrompt(true);
      }
    } else {
      setShowDrawCardPrompt(true);
    }
  }


  


    function drawCard(){
      // console.log('drawing card');
      setShowCard(true);
      setShowDrawCardPrompt(false);
    }

  function renderDrawCardPrompt(){
    if(showDrawCardPrompt === true && currentPlayerIndex === numberOfPlayers){
      return <DrawCardPrompt drawCard={drawCard}  />
    }
  }

  function renderCard(){
    if(showCard === true){
      return <Card currentRound={currentRound} cards={cards} toggleShowResults={toggleShowResults} />
    }
  }

  function toggleShowResults(){
    dispatch(calculatePlayerResults());
    dispatch(calculateDrinkUnits());
    setShowResults(true);
    setShowCard(false);
    console.log('show results: ' + showResults);
  }

  function startNextRound(){
    setShowResults(false);
    dispatch(toggleNextRound());
    dispatch(resetCurrentPlayerIndex());
    setShowNextPlayerPrompt(true);
  }

  function renderResults(){
    if(showResults === true){
      return <Results startNextRound={startNextRound} showFinalResults={showFinalResults} />
    }
  }

  function showFinalResults(){
    dispatch(determineWinnerByScore());
    dispatch(determineWinnerByDrinks());
    dispatch(deactivateGame());
  }


  function renderRoundLabel(){
    if (currentRound === roundMax){
      return <h2> Final Round! </h2>
    }
    else {
      return <h2> Round {currentRound} </h2>
    }
  }
    
  return(
    <div className="Round" >
      {renderRoundLabel()}
      {renderNextPlayerPrompt()}
      {renderEnterGuessPrompt()}
      {renderDrawCardPrompt()}
      {renderCard()}
      {renderResults()}
    </div>
  )
}