import React from "react";

import { PlayerSingleData } from "./PlayerSingleData";

import '../../css/ShowPlayerData.css';

import { useSelector } from "react-redux";

export const ShowPlayerData = () => {

  const players = useSelector(state => state.game.players);
  const gameState = useSelector(state => state.game.gameState)
  const turnCount= useSelector(state => state.state)

    return (
      <div className="ShowPlayerData">
          <p>For Testing: Show current Data</p>
          <p>GameState {gameState} </p>

          {players.map(player => {
            return <PlayerSingleData className="PlayerSingleData" key={player.id} player={player} name={player.name} />
          })}
      </div>
    )
  
}