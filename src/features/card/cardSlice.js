import { createSlice } from "@reduxjs/toolkit";


export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
    maxCards: 16,

  },
  reducers: {

  },
})

export const { activateGame, deactivateGame, setNrOfPlayers, createPlayers, updatePlayerName, setGame, toggleNextRound } = cardSlice.actions;

export default cardSlice.reducer;