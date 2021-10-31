import React from "react";
import { useState, useEffect } from "react";

export const EnterGuess = (props) => {

  const [guess, setGuess] = useState('empty');
  const [showSlider, setShowSlider] = useState(false);
  const [guessType, setGuessType] = useState('empty');


  useEffect(() => {
    ToggleShowSlider(guessType);
  }, [guessType]);

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
  }

  function handleSliderChange(e){
    setGuess(e.target.value);
  }

  function handleSubmit() {
    props.player.addGuess(guess);
    props.submitGuess();
  }
  
  function renderSlider(){
    if(showSlider === true){
      return (
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
      )
    }
  }

    function renderSelectGuessType(){
      return (
        <select id="guessType" name="guessType" onChange={handleGuessTypeChange} >
            <option value="empty">Choose ...</option>
            <option value="even">Even</option>
            <option value="uneven">Uneven</option>
            <option value="number">Number</option>
          </select>
      )
    }

    function renderReminder(){
      if(guess === "empty"){
        return <p>Choose an option!</p>
      } else {
        return <p>Do you want to go with "{guess}"?</p>
      }
    }

    function renderButton(){
      if(guess !== "empty"){
        return <button onClick={handleSubmit} >Yes!</button>
      }
    }


    return (
      <div className="EnterGuess" >
        <h3> {props.player.name}, <br /> Enter your guess! </h3>
          {renderSelectGuessType()}
          {renderSlider()}
          {renderReminder()}
          {renderButton()}
      </div>
    )

}