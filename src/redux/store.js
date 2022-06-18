import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import cartReducer from './slices/cartSlice';
import gameReducer from './slices/gameSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
    game: gameReducer,
  },
});
