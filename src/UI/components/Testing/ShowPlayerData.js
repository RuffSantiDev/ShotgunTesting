import React from "react";

import { PlayerSingleData } from "./PlayerSingleData";

import '../../css/ShowPlayerData.css';

import { useSelector } from "react-redux";

export const ShowPlayerData = () => {

  const players = useSelector(state => state.game.players);
  const cards = useSelector(state => state.game.cards);
  const currentTurn= useSelector(state => state.state)

  function renderPLayerSingleData(){
  
    
  }

    return (
      <div className="ShowPlayerData">
          <p>For Testing: Show current Data</p>
          <p>Cards: {cards} </p>
            {players.map(player => {
      return <PlayerSingleData className="PlayerSingleData" key={player.id} player={player} name={player.name} guesses={player.guesses} />
    })}
      </div>
    )
  
}