import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react";

import { StartScreen } from "../../UI/components/Body/StartScreen/StartScreen";
import { Standings } from "../../UI/components/Footer/Standings/Standings";
import { Round } from "../../UI/components/Body/Rounds/Round";
import { ShowPlayerData } from "../../UI/components/Testing/ShowPlayerData";
import { FinalResults } from "../../UI/components/Body/Rounds/Results/FinalResults";
import '../../UI/css/Game.css';


// Game class contains everything concerning the running game itself.
export const Game = () => {


  const dispatch = useDispatch();
  
  const gameActive = useSelector((state) => state.game.gameActive);
  const numberOfPlayers = useSelector((state) => state.game.numberOfPlayers);
  const players = useSelector ((state) => state.game.players);
  const currentRound = useSelector((state) => state.game.currentRound);
  const roundMax = useSelector(state => state.game.roundMax);
  const currentPlayerIndex = useSelector((state) => state.game.currentPlayerIndex);
  const winnerByScore = useSelector((state) => state.game.winnerByScore);
  const highestScore = useSelector((state) => state.game.highestScore);
  const winnerByDrinks = useSelector((state) => state.game.winnerByDrinks);
  const mostDrinks = useSelector((state) => state.game.mostDrinks);

  // for testing
  useEffect(() => {
    verifyData();
  }, [currentPlayerIndex]);

  useEffect(() => {
    renderStandings();
  }, [currentRound]);

  function renderStartScreen(){
    if(gameActive === false){
      return <StartScreen />
    }
  }

  function renderStandings(){
    if(gameActive === true){
      return <Standings players={players} />
    }
  }

  function renderRound(){
    if(gameActive === true && currentRound <= roundMax){
      return  <Round round={currentRound} numberOfPlayers={numberOfPlayers} players={players}/>
    }
  }

  function renderFinalResult(){
    if (gameActive === false && currentRound === roundMax){
      return <FinalResults winnerByDrinks={winnerByDrinks} mostDrinks={mostDrinks} winnerByScore={winnerByScore} highestScore={highestScore} />
    }
    // return <FinalResults winnerByDrinks={winnerByDrinks} mostDrinks={mostDrinks} winnerByScore={winnerByScore} highestScore={highestScore} />
  }


    
    function verifyData(){
      // console.log("updated verify Data");
      return <div>
      <ShowPlayerData />
      </div>
    }
    


    return (
      <div className="game">
        {renderStartScreen()}
        {renderRound()}
        {renderFinalResult()}
        {renderStandings()}
        {/* for testing */}
        {verifyData()}
      </div>
    )
  

}