import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './slices/dataSlice';
import cartReducer from './slices/cartSlice';
import gameReducer from './slices/gameSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
