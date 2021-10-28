import React from "react";

export const PlayerSingleData = (props) => {

    return (
      <div className="PlayerSingleData">
        <p>Player ID: {props.player.id}</p>
        <p>Player Name: {props.player.name}</p>
        {/* {props.player.guesses.map(guess => {
          return <p>{guess}</p>
        })} */}
        <p>guesses: {props.player.guesses}</p>
        <p>Score: {props.player.score}</p>
        <p>Turn Count: {props.player.turnCount}</p>
        <p>Is Shotgun: {props.player.isShotgun} </p>
      </div>
    )
}