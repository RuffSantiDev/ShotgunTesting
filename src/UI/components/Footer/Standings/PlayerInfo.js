import React from "react";

export const PlayerInfo = (props) => {

    return (
      <div className="PlayerInfo">
        <h5>{props.player.name}:</h5>
        <h4>{props.player.currentScore}</h4>
      </div>
    )
}