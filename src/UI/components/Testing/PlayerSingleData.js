import React from "react";
import { useEffect } from "react";

export const PlayerSingleData = (props) => {



  const isShotgunValue = () => {
    if(props.player.isShotgun === true){
      return <p>true</p>;
      } else {
        return <p>false</p>;
      }
  }

  const showGuesses = (
    <ul>
      {props.player.guesses.map(guess => {
        return <li key={props.player.id}> Guess {props.player.guesses.indexOf(guess)+1} = {guess}</li>
      })}


    </ul>
  )

    return (
      <div className="PlayerSingleData">
        <p>Player ID: {props.player.id}</p>
        <p>Player Name: {props.player.name}</p>
        {/* {props.player.guesses.map(guess => {
          return <p>guess nr {props.player.guesses.indexOf(guess)+1}: {guess}</p>
        })} */}
        <div><p>guesses:</p> {showGuesses}</div>
        <p>Score: {props.player.currentScore}</p>
        <p>Turn Count: {props.player.currentTurn}</p>
        <p> Multiplier: {props.player.currentMultiplier} </p>
        <div><p>Is Shotgun:</p> {isShotgunValue()}</div>
      </div>
    )
}