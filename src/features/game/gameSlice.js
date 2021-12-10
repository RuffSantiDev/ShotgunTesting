import { createSlice } from "@reduxjs/toolkit";

import Player from "../../classes/Player/Player";

// initiate a first default player based on the Player class
const player01 = new Player ('Player 01', 'Enter Player Name');
const player02 = new Player ('Player 02', 'Enter Player Name');

const initialState = {
  gameActive: false,
  numberOfPlayers: 2,
  currentRound: 0,
  // roundMax should be 16 -> roundMax = 2 for testing
  roundMax: 16,
  currentPlayerIndex: 0,
  // player objects need to be stored as serialized values for web transmission -> getPlayers & updatePlayers
  // JSON.stringify to serialize
  // JSON.parse to deserialize
  players: [player01, player02],
  cards: [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4],
  winnerByScore: 'not set yet',
  highestScore: 0,
  winnerByDrinks: 'not set yet',
  mostDrinks: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    activateGame: (state) => {
      state.gameActive = true;
    },
    deactivateGame: (state) => {
      state.gameActive = false;
    },
    resetGame: (state) => {
      console.log('game will be reset')
      // quick fix -> reload browser page
      window.location.reload(false);
      // once the state is stored in the cache, the cache needs to be cleared as well

    },
    setNrOfPlayers: (state, action) => {
      state.numberOfPlayers = action.payload;
    },
    updateCurrentPlayerIndex: (state, action) => {
      state.currentPlayerIndex = action.payload;
    },
    resetCurrentPlayerIndex: (state) => {
      state.currentPlayerIndex = 0;
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
    },
    toggleNextRound: (state) => {
      if(state.currentRound < state.roundMax) {  
         state.currentRound += 1;
        };
      },

    // creates round results for each player
    calculatePlayerResults: (state) => {
      state.players.forEach(player => {
        player.currentRound = state.currentRound;
        player.createRoundResult(state.cards);
      })
      console.log(state.players[0]);
    },
    // calculates drink units each player needs to drink
    // drink units are calculated from the sum of all points - the individual round result (points*multiplier) of the player
    calculateDrinkUnits: (state) => {
      let overallDrinkUnits = 0;
      state.players.forEach(player => {
        overallDrinkUnits += player.currentResult;
        // console.log('player current result' + player.currentResult);
      });
      state.players.forEach(player => {
        let individualDrinkUnits = overallDrinkUnits - player.currentResult;
        player.setDrinkUnits(individualDrinkUnits);
      });
      // console.log('Drink units have been set!');
      // console.log(overallDrinkUnits);
    },
    
    determineWinnerByScore: (state) => {
      let currentMax = 0;
      let currentWinner = 'none';
      let playerScore = 0;
      state.players.forEach(player => {
        playerScore = player.currentScore;
        if (playerScore > currentMax) {
          currentMax = playerScore;
          currentWinner = player.name;
        }
      })
      state.winnerByScore = currentWinner;
      state.highestScore = currentMax;
    },
    determineWinnerByDrinks: (state) => {
      let currentMax = 0;
      let currentWinner = 'none';
      let numberOfDrinks = 0;
      state.players.forEach(player => {
        numberOfDrinks = player.sumOfDrinkUnits;
        if (numberOfDrinks > currentMax) {
          currentMax = numberOfDrinks;
          currentWinner = player.name;
        }
      })
      state.winnerByDrinks = currentWinner;
      state.mostDrinks = currentMax;
    },
  },
})

export const { activateGame, deactivateGame, setNrOfPlayers, updateCurrentPlayerIndex, resetCurrentPlayerIndex, getPlayers, updatePlayers, createPlayers, updatePlayerName, randomizeCards, toggleNextRound, calculatePlayerResults, calculateDrinkUnits, determineWinnerByScore, determineWinnerByDrinks, resetGame} = gameSlice.actions;

export default gameSlice.reducer;