import React from "react";

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
        return <li>{guess}</li>
      })}


    </ul>
  )

    return (
      <div className="PlayerSingleData">
        <p>Player ID: {props.player.id}</p>
        <p>Player Name: {props.player.name}</p>
        {/* {props.player.guesses.map(guess => {
          return <p>{guess}</p>
        })} */}
        <div><p>guesses:</p> {showGuesses}</div>
        <p>Score: {props.player.currentScore}</p>
        <p>Turn Count: {props.player.currentTurn}</p>
        <div><p>Is Shotgun:</p> {isShotgunValue()}</div>
      </div>
    )
}