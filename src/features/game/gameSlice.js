import { createSlice } from "@reduxjs/toolkit";

import Player from "../../classes/Player/Player";

// initiate a first default player based on the Player class
const player01 = new Player ('Player 01', 'Enter Player Name');
const player02 = new Player ('Player 02', 'Enter Player Name');


export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gameActive: false,
    numberOfPlayers: 2,
    currentRound: 0,
    roundMax: 16,
    currentPlayerIndex: 0,
    // player objects need to be stored as serialized values for web transmission -> getPlayers & updatePlayers
    // JSON.stringify to serialize
    // JSON.parse to deserialize
    players: [player01, player02],
    cards: [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4],
  },
  reducers: {
    activateGame: (state) => {
      state.gameActive = true;
    },
    deactivateGame: (state) => {
      state.gameActive = false;
    },
    setNrOfPlayers: (state, action) => {
      state.numberOfPlayers = action.payload;
    },
    updateCurrentPlayerIndex: (state, action) => {
      state.currentPlayerIndex = action.payload;
    },

    // METHODS TO GET AND UPDATE DE-/SERIALIZED PLAYER OBJECT
    getPlayers: (state) =>{
      const players = state.players;
      const deserializedPlayerObject = JSON.parse(players);
      return deserializedPlayerObject;
    },
    updatePlayers: (state, action) => {
      const players = action.payload;
      const serializedPlayerObject = JSON.stringify(players);
      state.players = serializedPlayerObject;
    },
    createPlayers: (state) => {
      let count = state.numberOfPlayers;
      let playerArray = [];
      // "for loop" creates player objects according to entered number of players
      for (let i=1; i<= count; i++){
        const player = new Player(i,'Enter player name');
        let playerId = `Player 0${i}`;
        player.id = playerId;
        playerArray.push(player);
      }
      // update players
      state.players = playerArray;
    },
    randomizeCards: (state) => {
      const array = state.cards;
      for (let i= array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      state.cards = array;
      // console.log('generated cards array: ' + array);
    },

    toggleNextRound: (state) => {
      if(state.currentRound < state.roundMax) {  
         state.currentRound += 1;
        };
      },

      // this method should call the create round result from Player object after each round -> not working yet
    updatePlayerScores: (state) => {
      state.players.forEach(player => {
        player.createRoundResult(state.cards);
      })
    }
  },
})

export const { activateGame, deactivateGame, setNrOfPlayers, getPlayers, updatePlayers, createPlayers, updatePlayerName, randomizeCards, toggleNextRound, updateCurrentPlayerIndex } = gameSlice.actions;

export default gameSlice.reducer;