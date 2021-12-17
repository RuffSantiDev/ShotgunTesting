import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { setRoundMax } from "../../../../../../features/game/gameSlice";

export const EnterRoundNumber = () => {
  const dispatch = useDispatch();

  const roundMax = useSelector((state) => state.game.roundMax);

  function handleSliderChange(e) {
    const roundMax = parseInt(e.target.value);
    dispatch(setRoundMax(roundMax));
  }

  return (
    <div className="EnterRoundNumber">
      {/* <h4>New game</h4> */}
      <h3>Set number of Rounds: {roundMax} </h3>

      <span>1</span>
      <input
        className="slider"
        onChange={handleSliderChange}
        type="range"
        id="roundNumberSlider"
        name="roundNumberSlider"
        min="1"
        max="16"
        value={roundMax}
      />
      <span>16</span>
    </div>
  );
};
