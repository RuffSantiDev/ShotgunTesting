import React from "react";

import { useDispatch } from "react-redux";

import { activateGame, setGame, toggleNextRound } from '../../../../features/game/gameSlice';

import '../../../css/StartScreen.css';

import { EnterPlayerNumber } from "./Parts/EnterPlayerNumber/EnterPlayerNumber";

// import { Welcome } from "./Parts/Welcome";
import { EnterPlayerNamesForm } from "./Parts/EnterPlayerNames/EnterPlayerNamesForm";


export const StartScreen = (props) => {

  const dispatch = useDispatch();

  function startGame() {
    dispatch(activateGame());
    dispatch(setGame());
    dispatch(toggleNextRound());
  }

    return (
      <div className="StartScreen">
        <EnterPlayerNumber />
        <EnterPlayerNamesForm /> 
        <button id='startGame' onClick={startGame}>Start Game</button>
      </div>
    )

}
