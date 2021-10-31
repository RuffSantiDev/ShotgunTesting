import React from "react";

export const IndividualResults = (props) => {



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
        <p>Player Name: {props.player.name}</p>
        <p>Score: {props.player.currentScore}</p>
      </div>
    )
}