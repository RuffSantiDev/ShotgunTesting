import React from "react";

import { PlayerInfo } from "./PlayerInfo";

import '../../../css/Standings.css';

export const Standings = (props) => {

    return (
      <div className="Standings">
        <h4>Standings</h4>
        {props.players.map(player => {
            return <PlayerInfo className="PlayerInfo" key={player.id} player={player}  />
          })}
      </div>
    )
  
}