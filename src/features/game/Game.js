import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import { activateGame, deactivateGame, setNrOfPlayers, createPlayers, setGame, toggleNextRound } from "./gameSlice";

import { StartScreen } from "../../UI/components/Body/StartScreen/StartScreen";
import { Standings } from "../../UI/components/Footer/Standings/Standings";
import { Round } from "../../UI/components/Body/Rounds/Round";
import { ShowPlayerData } from "../../UI/components/Testing/ShowPlayerData";

import '../../UI/css/Game.css';


// Game class contains everything concerning the running game itself.
export const Game = () => {
  const dispatch = useDispatch();
  
  const gameState = useSelector((state) => state.game.gameState);
  const numberOfPlayers = useSelector((state) => state.game.numberOfPlayers);
  const players = useSelector ((state) => state.game.players);
  const round = useSelector((state) => state.game.round);

  const startScreen = (
      <StartScreen 
          setNrOfPlayers={dispatch(setNrOfPlayers)}
          numberOfPlayers={numberOfPlayers}
          activateGame={dispatch(activateGame)}
          players={players}
          createPlayers={dispatch(createPlayers)}
          />   
    );

    const footer = (
      <Standings players={players} />
    );

    const displayRound = (
      <Round round={round} numberOfPlayers={numberOfPlayers} players={players}/>
    );
    
    const verifyData = (
      <div>
      <ShowPlayerData />
      </div>
    );


    return (
      <div className="game">
        {gameState === false ? startScreen : <p></p> }

        {(round > 0 && gameState === true) ? displayRound : <p></p>}
      

        {gameState === true ? footer : <p></p>}
        {verifyData}
      </div>
    )
  

}