import React from "react";
import { useState } from "react";

import { IndividualResults } from "./IndividualResults";

import './Results.css';

import { useSelector } from "react-redux";

export const Results = (props) => {

  const players = useSelector(state => state.game.players);
  const numberOfPlayers = useSelector(state => state.game.numberOfPlayers);

  const [sipCount, setSipCount] = useState(0)
    
  function debtSettled(){
    let counter = sipCount;
    counter++;
    setSipCount(counter);
  }

  function startNextRound(){
    props.startNextRound();
  }

  function renderStartNextRoundButton(){
    if(sipCount === numberOfPlayers){
      return <button onClick={startNextRound} >Start Next Round!</button>
    }
    
  }

    return (
      <div className="ShowResults">
          <h3>Results:</h3>
          {players.map(player => {
      return <IndividualResults className="IndividualResults" key={player.id} player={player} debtSettled={debtSettled} />
    })}
      {renderStartNextRoundButton()}
      </div>
    )
  
}