import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { StartScreen } from "../../UI/components/Body/StartScreen/StartScreen";
import { Standings } from "../../UI/components/Footer/Standings/Standings";
import { Round } from "../../UI/components/Body/Rounds/Round";
import { ShowPlayerData } from "../../UI/components/Testing/ShowPlayerData";
import '../../UI/css/Game.css';
import { Footer } from "../../UI/components/Footer/Footer";
import { Info } from "../../UI/components/Body/Info";

// Game class contains everything concerning the running game itself.
export const Game = () => {
  
  // import slice state data
  const gameActive = useSelector((state) => state.game.gameActive);
  const numberOfPlayers = useSelector((state) => state.game.numberOfPlayers);
  const players = useSelector ((state) => state.game.players);
  const currentRound = useSelector((state) => state.game.currentRound);
  const roundMax = useSelector(state => state.game.roundMax);
  const currentPlayerIndex = useSelector((state) => state.game.currentPlayerIndex);
 

  // for testing
  useEffect(() => {
    verifyData();
  }, [currentPlayerIndex]);

  useEffect(() => {
    renderStandings();
  }, [currentRound]);

  //start screen allows the player to enter number of players and player names and to start the game
  function renderStartScreen(){
    // && currentRound === 0
    if(gameActive === false ){
      return <StartScreen />
    }
  }

  // renderRound is activated once the game is started
  // it contains the flow for the round loops up until the final standings
  function renderRound(){
    if(gameActive === true && currentRound <= roundMax){
      return  <Round round={currentRound} numberOfPlayers={numberOfPlayers} players={players}/>
    }
  }

  //current standings are rendered on the bottom once the game is active
  function renderStandings(){
    if(gameActive === true){
      return <Standings players={players} />
    }
  }

  //shows a set of testing data on the bottom of the page
  function verifyData(){
    return <div>
    <ShowPlayerData />
    </div>
  }
  
  return (
    <div className="game">
      {renderStartScreen()}
      {renderRound()}
      {renderStandings()}
      {/* for testing decomment next line*/}
      {/* {verifyData()} */}
      <Footer />
      {/* <Info /> */}
    </div>
  )
  

}