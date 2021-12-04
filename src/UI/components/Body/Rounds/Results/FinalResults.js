import React from "react";
import { useState } from "react";
import { PlayerFinalResult } from "./PlayerFinalResult";
import './Results.css';
import { useSelector } from "react-redux";

export const FinalResults = (props) => {

const players = useSelector(state => state.game.players);

function startNewGame(){
  props.startNewGame();
}

    return (
      <div className="ShowResults">
          <h3>Final Results:</h3>
          <h4>Winner by Score: {props.winnerByScore} ({props.highestScore}) </h4>
          {/* <p>Points: {props.highestScore}</p> */}
          <h4>Winner by Drinks: {props.winnerByDrinks} ({props.mostDrinks}) </h4>
          {/* <p>Drinks: {props.mostDrinks} </p> */}
          {players.map(player => {
      return <PlayerFinalResult className="PlayerFinalResult" key={player.id} player={player} />
    })}
      
          <button onClick={startNewGame}>Start New Game!</button>
      </div>
    )
  
}