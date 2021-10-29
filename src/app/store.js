import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/game/gameSlice';
// import cardReducer from '../features/card/cardSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    // card: cardReducer,
  },
});
