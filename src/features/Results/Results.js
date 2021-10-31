import React from "react";

import { IndividualResults } from "./IndividualResults";



import { useSelector } from "react-redux";

export const Results = () => {

  const players = useSelector(state => state.game.players);
  const cards = useSelector(state => state.game.cards);
  const currentTurn= useSelector(state => state.state)

  function renderPLayerSingleData(){
  
    
  }

    return (
      <div className="ShowPlayerData">
          <h3>Results</h3>
          {players.map(player => {
      return <IndividualResults className="IndividualResults" key={player.id} player={player} />
    })}
      </div>
    )
  
}