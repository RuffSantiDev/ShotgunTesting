import { createSlice } from "@reduxjs/toolkit";

//CARD SLICE CAN BE DELETED


export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4],


  },
  reducers: {
    addCard: (state,action) => {
      state.cards.push(action.payload);
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
  },
})

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;