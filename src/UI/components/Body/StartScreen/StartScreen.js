import React from "react";

import { useDispatch } from "react-redux";

import {
  startGame,
  activateGame,
  randomizeCards,
  toggleNextRound
} from "../../../../features/game/gameSlice";

import "../../../css/StartScreen.css";

import { EnterPlayerNumber } from "./Parts/EnterPlayerNumber/EnterPlayerNumber";
import { EnterRoundNumber } from "./Parts/EnterRoundNumber/EnterRoundNumber";

// import { Welcome } from "./Parts/Welcome";
import { EnterPlayerNamesForm } from "./Parts/EnterPlayerNames/EnterPlayerNamesForm";

export const StartScreen = (props) => {
  const dispatch = useDispatch();

  function startGame() {
    dispatch(activateGame());
    dispatch(toggleNextRound());
    dispatch(randomizeCards());
  }

  return (
    <div className="StartScreen">
      <EnterRoundNumber />
      <EnterPlayerNumber />
      <EnterPlayerNamesForm />
      <button id="startGame" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
};
