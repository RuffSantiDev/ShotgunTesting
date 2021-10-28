import { createSlice } from "@reduxjs/toolkit";

import Player from "../../classes/Player/Player";

// initiate a first default player based on the Player class
const player01 = new Player ('Player 01', 'Enter Player Name',[1,2,3]);
const player02 = new Player ('Player 02', 'Enter Player Name',[1,2,3]);


export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gameState: false,
    numberOfPlayers: 2,
    round: 0,
    roundMax: 16,
    players: [player01, player02],
  },
  reducers: {
    activateGame: (state) => {
      state.gameState = true;
    },
    deactivateGame: (state) => {
      state.gameState = false;
    },
    setNrOfPlayers: (state, action) => {
      state.numberOfPlayers = action.payload;
    },
    createPlayers: (state) => {
      let count = state.numberOfPlayers;
      let playerArray = [];
      // "for loop" creates player objects according to entered number of players
      for (let i=1; i<= count; i++){
        const player = new Player(i,'Enter player name');
        let playerId = `Player 0${i}`;
        player.setId(playerId);
        playerArray.push(player);
      }
      // update players
      state.players = playerArray;
    },
    updatePlayers: (state, action) => {
      state.players = action.payload;
    },
    setGame: (state) => {
      state.players.forEach(player => {
        player.score = 0;
        
        player.turnCount = 0;
        player._isShotgun = false;
      });
    
    },
    toggleNextRound: (state) => {
      if(state.round < state.roundMax) {  
         state.round += 1;
        };
      },
  },
})

export const { activateGame, deactivateGame, setNrOfPlayers, createPlayers, updatePlayerName, setGame, toggleNextRound } = gameSlice.actions;

export default gameSlice.reducer;