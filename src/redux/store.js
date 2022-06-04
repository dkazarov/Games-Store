import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import cartReducer from './slices/cartSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
  },
});
