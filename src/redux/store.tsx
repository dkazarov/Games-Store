import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './slices/dataSlice';
import cartReducer from './slices/cartSlice';
import gameReducer from './slices/gameSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
