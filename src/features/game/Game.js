import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react";

import { activateGame, deactivateGame, setNrOfPlayers, createPlayers, toggleNextRound } from "./gameSlice";

import { StartScreen } from "../../UI/components/Body/StartScreen/StartScreen";
import { Standings } from "../../UI/components/Footer/Standings/Standings";
import { Round } from "../../UI/components/Body/Rounds/Round";
import { ShowPlayerData } from "../../UI/components/Testing/ShowPlayerData";

import '../../UI/css/Game.css';


// Game class contains everything concerning the running game itself.
export const Game = () => {


  const dispatch = useDispatch();
  
  const gameActive = useSelector((state) => state.game.gameActive);
  const numberOfPlayers = useSelector((state) => state.game.numberOfPlayers);
  const players = useSelector ((state) => state.game.players);
  const currentRound = useSelector((state) => state.game.currentRound);
  const currentPlayerIndex = useSelector((state) => state.game.currentPlayerIndex);

  // for testing
  useEffect(() => {
    verifyData()
  }, [currentPlayerIndex]);

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
    if(gameActive === true && currentRound > 0){
      return  <Round round={currentRound} numberOfPlayers={numberOfPlayers} players={players}/>
    }
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
        {renderStandings()}
        {/* for testing */}
        {verifyData()}
      </div>
    )
  

}