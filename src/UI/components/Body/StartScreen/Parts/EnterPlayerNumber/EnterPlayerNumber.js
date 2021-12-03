import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { setNrOfPlayers, createPlayers, } from '../../../../../../features/game/gameSlice';


export const EnterPlayerNumber = () => {

  const dispatch = useDispatch();

  const numberOfPlayers = useSelector(state => state.game.numberOfPlayers);
    
  function handleSliderChange(e) {
    const playerCount = parseInt(e.target.value);
    dispatch(setNrOfPlayers(playerCount));
    dispatch(createPlayers());
      }


    return (      
    <div className="EnterPlayerNumber" >
    {/* <h4>New game</h4> */}
    <h3>Select number of Players:</h3>

    <span>2</span>
    <input
      className="slider"
      onChange={handleSliderChange}
      type="range" id="playerNumberSlider"
      name="playerNumberSlider"
      min="2"
      max="6"
      value={numberOfPlayers} />
    <span>6</span>
  </div>)
      
}
