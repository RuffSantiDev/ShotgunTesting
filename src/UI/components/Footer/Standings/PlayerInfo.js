import React from "react";

export const PlayerInfo = (props) => {

    return (
      <div className="PlayerInfo">
        <p>{props.player.name}: {props.player.currentScore}</p>
      </div>
    )
}