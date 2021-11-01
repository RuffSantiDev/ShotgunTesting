import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const EnterPlayerName = (props) => {
  
  function handleStateChange(e) {
    let input = e.target.value;
    props.player.name = input;
    // updatePlayerName
  }

 // needs input verification for security shit

    return (
      <div className="EnterPlayerNameItem">
        <label >{props.player.id}: </label>
        
        <input
          onChange={handleStateChange}
          key={props.player.id}
          id={props.player.id}
          type="text"
          name={props.player.id}
          placeholder='Enter Player Name' />
      </div>
    )


}