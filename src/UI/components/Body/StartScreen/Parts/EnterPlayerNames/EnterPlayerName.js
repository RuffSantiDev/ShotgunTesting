import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const EnterPlayerName = (props) => {

  const [showWarning, setshowWarning] = useState(false);

  // useEffect(() => {
  //   displayWarning();
    
  // }, [showWarning])
  
  function handleStateChange(e) {
    let input = e.target.value;
    if (input.length > 6){
      setshowWarning(true);
    } else {
      setshowWarning(false);
    }
    input = String(input).substring(0,6);
    props.player.name = input;
    
    
    // updatePlayerName
  }



 function displayWarning(string) {
  if(showWarning === true){
    return <p className="warning">Please use 6 characters max</p>
  }
 }

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
          {displayWarning(props.player.name)}
      </div>
    )


}