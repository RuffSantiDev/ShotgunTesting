import React from "react";
import { useState, useEffect } from "react";

export const EnterGuess = (props) => {

  const [guess, setGuess] = useState('even');
  const [showSlider, setShowSlider] = useState(false);
  const [guessType, setGuessType] = useState('even');
  const [showInquiry, setShowInquiry] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    ToggleShowSlider(guessType);
  }, [guessType]);

  useEffect(() => {
    renderSelectGuessType();
  }, [guess, submitted]);

  

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
    setShowInquiry(true);
  }

  function handleSliderChange(e){
    setGuess(e.target.value);
    // console.log(guess);
  }

  function resetGuess(){

  }

  function handleSubmit() {
    props.player.addGuess(guess);
    props.submitGuess();
    setSubmitted('true');
    resetGuess();
    setGuessType(null);
    console.log(guess);
    setGuess('even');
    setGuessType('even');
    console.log(guess);
    console.log(submitted);
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




    function renderSelectGuessType(){
      return (
        <select id="guessType" name="guessType" onChange={handleGuessTypeChange} >
            <option value="even">Even</option>
            <option value="uneven">Uneven</option>
            <option value="number">Number</option>
          </select>
      )
    }


    return (
      <div className="EnterGuess" >
        <h3> {props.player.name}, <br /> Enter your guess! </h3>
          {renderSelectGuessType()}
          {showSlider === true ? numberSlider : <p></p>}
          <p>Do you want to go with "{guess}"?</p>
          <button onClick={handleSubmit} >Yes!</button>
      </div>
    )

}