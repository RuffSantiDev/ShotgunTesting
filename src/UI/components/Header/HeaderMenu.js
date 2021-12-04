import React from "react";
import { useDispatch } from 'react-redux'
import Collapsible from "react-collapsible";
import '../../css/Footer.css';


import { resetGame } from "../../../features/game/gameSlice";

export const HeaderMenu = (props) => {
  const dispatch = useDispatch();

  function handleShowInfo(){

  }

  function handleResetGame(){
    dispatch(resetGame());
  }

    return (
      <div className="HeaderMenu">
        <Collapsible className="Collapsible" trigger="Menu">
        <button onClick={handleShowInfo} > Info </button>
        <button onClick={handleResetGame} >Reset Game</button>  

        </Collapsible>
        
        
      </div>
    )
  
}