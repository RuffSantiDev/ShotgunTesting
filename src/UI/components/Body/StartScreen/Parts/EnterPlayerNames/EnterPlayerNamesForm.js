import React from "react";

import {EnterPlayerName} from './EnterPlayerName';

import { useSelector } from "react-redux";

import './EnterPlayerNamesForm.css'

export const EnterPlayerNamesForm = () => {

// Player Names need to be updated to objects in state.game.players array !!!
 
  const players = useSelector(state => state.game.players);

    return (
      <div>
        <form>
          <h3>Enter player names:</h3>
          {players.map(player => {
            return <EnterPlayerName className="EnterPlayerName" key={player.id} player={player} name={player.name} />
          })}
        </form>
      </div>
    )
  
}