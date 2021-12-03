import React from "react";
import { useState } from "react";
import { IndividualResults } from "./IndividualResults";
import './Results.css';
import { useSelector } from "react-redux";



export const Results = (props) => {

  const players = useSelector(state => state.game.players);
  const numberOfPlayers = useSelector(state => state.game.numberOfPlayers);
  const currentRound = useSelector(state => state.game.currentRound);
  const roundMax = useSelector(state => state.game.roundMax);

  const [sipCount, setSipCount] = useState(0);
  const [hideResults, setHideResults] = useState(false);

  function debtSettled(){
    let counter = sipCount;
    counter++;
    setSipCount(counter);
    if (currentRound === roundMax && counter === numberOfPlayers){
      setHideResults(true);
    }
  }

  function startNextRound(){
    props.startNextRound();
  }

  function showFinalResults(){
    props.showFinalResults();
  }



  function renderStartNextRoundButton(){
    if(sipCount === numberOfPlayers){
      if(currentRound < roundMax -1){
        return <button onClick={startNextRound} >Start Next Round!</button>
      } else if (currentRound === roundMax - 1){
        return <button onClick={startNextRound} >Start Final Round!</button>
      }
    } 
  }

  function renderGameOver(){
    if(currentRound === roundMax && sipCount === numberOfPlayers){
      return (<div>
        <h3>Game Over</h3>
        {/* <p>Are you ready for the final standings?</p> */}
        <button onClick={showFinalResults} >Show Final Standings</button>
      </div>)
    }
  }

  function renderResult(){
    if(hideResults === false){
      return (
        <div className="ShowResults">
          <h3>Results</h3>
          {players.map(player => {
            return <IndividualResults className="IndividualResults" key={player.id} player={player} debtSettled={debtSettled} />
          })}
        </div>
      )
    }
  }

    return (
      <div>
      {renderResult()}
      {renderStartNextRoundButton()}
      {renderGameOver()}
      </div>
    )
  
}