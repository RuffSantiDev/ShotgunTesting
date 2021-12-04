// import tools
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react";

// import react components
import { EnterGuess } from "./Parts/EnterGuess";
import { Card } from "../../../../features/card/Card";
import { DrawCardPrompt } from "./Card/DrawCardPrompt";
import { ReadyNextPlayerPrompt } from "./Parts/ReadyNextPlayerPrompt";
import { Results } from "./Results/Results";
import { FinalResults } from "./Results/FinalResults"

// import css
import './Round.css';

// import game actions
import { updateCurrentPlayerIndex, calculatePlayerResults, calculateDrinkUnits, toggleNextRound, resetCurrentPlayerIndex, determineWinnerByScore, determineWinnerByDrinks, deactivateGame, resetGame } from "../../../../features/game/gameSlice";


// 'Round' controls the overall game loop. For each round and to the final result
export const Round = () => {
  const dispatch = useDispatch();

  // game state variables
  const players = useSelector(state => state.game.players);
  const cards = useSelector(state => state.game.cards);
  const currentRound = Number(useSelector((state) => state.game.currentRound));
  const roundMax = useSelector(state => state.game.roundMax);
  const numberOfPlayers = Number(useSelector((state) => state.game.numberOfPlayers));
  const currentPlayerIndex = Number(useSelector((state) => state.game.currentPlayerIndex));
  const winnerByScore = useSelector((state) => state.game.winnerByScore);
  const highestScore = useSelector((state) => state.game.highestScore);
  const winnerByDrinks = useSelector((state) => state.game.winnerByDrinks);
  const mostDrinks = useSelector((state) => state.game.mostDrinks);

  // local state variables
  const [showNextPlayerPrompt, setShowNextPlayerPrompt] = useState(true);
  const [showEnterGuessPrompt, setShowEnterGuessPrompt] = useState(false);
  const [showDrawCardPrompt, setShowDrawCardPrompt] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showFinalResults, setShowFinalResults] = useState(false);

  // i dont know if i might need this at some point
  // useEffect(() => {
  //   renderEnterGuessPrompt();
  // }, [currentPlayerIndex, showEnterGuessPrompt]);

  // useEffect(() => {
  //   renderDrawCardPrompt();
  // }, [showCard]);

// ################# START OF ROUND LOOP ########################################################

  useEffect(() => {
    renderNextPlayerPrompt();
    renderEnterGuessPrompt();
    renderDrawCardPrompt();
    renderCard();
    renderResults();
  }, [currentPlayerIndex, showCard, showNextPlayerPrompt, showEnterGuessPrompt, showResults]);

// all functions are sorted in chronological order according to round flow

// Screen 01: asks the current player if ready
  function renderNextPlayerPrompt(){
    if(showNextPlayerPrompt===true && currentPlayerIndex < numberOfPlayers){
      let currentPlayer = players[currentPlayerIndex];
      return <ReadyNextPlayerPrompt player={currentPlayer} toggleNextPlayerPrompt={toggleNextPlayerPrompt} />      
    }
  }

  // Screen 02: prompts current player to enter guess
  function renderEnterGuessPrompt(){
    while(showEnterGuessPrompt === true && currentPlayerIndex < numberOfPlayers) {
        let currentPlayer = players[currentPlayerIndex];  
          return <EnterGuess player={currentPlayer} submitGuess={submitGuess} />
      }
  }

  // updates player index and toggles next player prompt
  function submitGuess(){
    let index = currentPlayerIndex;
    index++;
      dispatch(updateCurrentPlayerIndex(index));
      toggleNextPlayerPrompt();
  }

  // controls the input loop for all players
  // shows draw card prompt once all players have made their guesses and deactivates the previous screen
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


// Screen 03: prompts the playder to draw the card, once all players have made their input 
  function renderDrawCardPrompt(){
    if(showDrawCardPrompt === true && currentPlayerIndex === numberOfPlayers){
      return <DrawCardPrompt drawCard={drawCard}  />
    }
  }

  // draws the card, toggles the render of the card and deactivates the previous screen
  function drawCard(){
    // console.log('drawing card');
    setShowCard(true);
    setShowDrawCardPrompt(false);
  }
  // Screen 04: renders the current card
  function renderCard(){
    if(showCard === true){
      return <Card currentRound={currentRound} cards={cards} toggleShowResults={toggleShowResults} />
    }
  }
  // toggles to show the current round results and deactivates the previous screen
  function toggleShowResults(){
    dispatch(calculatePlayerResults());
    dispatch(calculateDrinkUnits());
    setShowResults(true);
    setShowCard(false);
    console.log('show results: ' + showResults);
  }



  //Screen 05: renders the round results
  function renderResults(){
    if(showResults === true){
      return <Results startNextRound={startNextRound} toggleFinalResults={toggleFinalResults} />
    }
  }

  // starts next round and deactivates previous screen. resets player index so that first player can start input. activates the prompt for next player input
  function startNextRound(){
    setShowResults(false);
    dispatch(toggleNextRound());
    dispatch(resetCurrentPlayerIndex());
    setShowNextPlayerPrompt(true);
  }

  // ######################### END OF ROUND LOOP ########################################################

  // triggers winner determination and to show final results screen
  function toggleFinalResults(){
    dispatch(determineWinnerByScore());
    dispatch(determineWinnerByDrinks());
    setShowFinalResults(true);
    setShowResults(false);
  }

  // screen 06: shows final results of the current game
  function renderFinalResults(){
    if (showFinalResults === true && currentRound === roundMax){
      return <FinalResults winnerByDrinks={winnerByDrinks} mostDrinks={mostDrinks} winnerByScore={winnerByScore} highestScore={highestScore} startNewGame={startNewGame} />
    }
  }

// triggers the reset of the game so that a new game can be started
  function startNewGame(){
    dispatch(deactivateGame());
    dispatch(resetGame())
    setShowFinalResults(false);
  }

// renders the header above the round screen to show current round or final round
  function renderRoundLabel(){
    while(showFinalResults === false){
      if (currentRound === roundMax){
        return <h2> Final Round! </h2>
      }
      else {
        return <h2> Round {currentRound} </h2>
      }
    }
    
  }

  // returns the round loop
  return(
    <div className="Round" >
      {renderRoundLabel()}
      {renderNextPlayerPrompt()}
      {renderEnterGuessPrompt()}
      {renderDrawCardPrompt()}
      {renderCard()}
      {renderResults()}
      {renderFinalResults()}
    </div>
  )
}