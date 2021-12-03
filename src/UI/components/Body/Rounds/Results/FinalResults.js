import React from "react";
import { useState } from "react";
import { PlayerFinalResult } from "./PlayerFinalResult";
import './Results.css';
import { useSelector } from "react-redux";

export const FinalResults = (props) => {

const players = useSelector(state => state.game.players);


    return (
      <div className="ShowResults">
          <h3>Final Results:</h3>
          
          {players.map(player => {
      return <PlayerFinalResult className="PlayerFinalResult" key={player.id} player={player} />
    })}
      <p>Winner by Score: {props.winnerByScore} </p>
          <p>Points: {props.highestScore}</p>
          <p>Winner by Drinks: {props.winnerByDrinks} </p>
          <p>Drinks: {props.mostDrinks} </p>
      </div>
    )
  
}