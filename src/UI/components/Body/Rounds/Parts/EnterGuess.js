import React from "react";
import { useState, useEffect } from "react";

export const EnterGuess = (props) => {

  const [guess, setGuess] = useState('even');
  const [showSlider, setShowSlider] = useState(false);
  const [guessType, setGuessType] = useState('even');
  
  useEffect(() => {
    ToggleShowSlider(guessType);

  }, [guessType])

  function ToggleShowSlider(guessType) {
    if (guessType === 'number') {
      setGuess(4);
      setShowSlider(true);
    } else {
      setGuess(guessType);
      setShowSlider(false);
    }
  }
 
  function handleGuessTypeChange(e) {
    setGuessType(e.target.value);

    ToggleShowSlider(guessType);
    console.log(guessType);
  }

  function handleSliderChange(e){
    setGuess(e.target.value);
    console.log(guess);
  }


  function handleSubmit() {
    props.player.addGuess(guess);

  }
  const numberSlider = (
    <div id="numberSlider" >
      <span>1</span>
      <input
        onChange={handleSliderChange}
        type="range"
        id="numberSlider"
        name="numberSlider"
        min="1"
        max="4"
      />
      <span>4</span>
    </div>
    );




    return (
      <div className="EnterGuess" >
        <h3> {props.player.name}, <br /> Enter your guess! </h3>

        <form >
          <select id="guessType" name="guessType" onChange={handleGuessTypeChange}>
            <option value="even">Even</option>
            <option value="uneven">Uneven</option>
            <option value="number">Number</option>
          </select>
          {showSlider === true ? numberSlider : <p></p>}
          <p>Do you want to go with "{guess}"?</p>
          <button onClick={handleSubmit} >Do it!</button>
        </form>
      </div>
    )

}