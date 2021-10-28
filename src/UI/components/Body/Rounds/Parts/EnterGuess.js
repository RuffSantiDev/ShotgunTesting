import React from "react";
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";

export const EnterGuess = (props) => {

  const [guess, setGuess] = useState(null);
  const [showSlider, setShowSlider] = useState(false);
  const [guessType, setGuessType] = useState(null);
  const [guessSubmitted, setGuessSubmitted] = useState(false);

  const currentRound = useSelector((state) => state.game.currentRound);


  useEffect(() => {
    ToggleShowSlider(guessType);
  }, [guessType]);

  useEffect (() => {
    showButton()
  }, [guessSubmitted]);

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
    // console.log(guessType);
  }

  function handleSliderChange(e){
    setGuess(e.target.value);
    // console.log(guess);
  }


  function handleSubmit() {
    setGuessSubmitted(true);
    props.player.addGuess(guess);
    props.toggleNextPlayer();
    setGuess(null);
    setGuessType(null);
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

    function showButton(){
      while(props.player.turnCount < currentRound){
      return <button onClick={handleSubmit} >Yes!</button>
    } 
    };

    function showQustion(){
      if (guess === null){
      } else {
        return <p>Do you want to go with "{guess}"?</p>
      }
    }


    return (
      <div className="EnterGuess" >
        <h3> {props.player.name}, <br /> Enter your guess! </h3>


          <select id="guessType" name="guessType" onChange={handleGuessTypeChange}>
            <option value="even">Even</option>
            <option value="uneven">Uneven</option>
            <option value="number">Number</option>
          </select>
          {showSlider === true ? numberSlider : <p></p>}
          {showQustion()}
          {/* <button onClick={handleSubmit} >Do it!</button> */}
        {showButton()}
      </div>
    )

}