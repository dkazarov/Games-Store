import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../@types/types';
import { RootState } from '../store';

type gameSliceState = {
  game: IProduct;
};

const initialState: gameSliceState = {
  game: {
    id: 1,
    video: '',
    description: 'title',
    genres: [],
    image: '',
    title: '',
    price: 0,
    count: 0,
  },
};

export const gameSlice = createSlice({
  name: 'currentGame',
  initialState,
  reducers: {
    setCurrentGame: (state, action: PayloadAction<IProduct>) => {
      state.game = action.payload;
    },
  },
});
export const gameSelector = (state: RootState) => state.game;

// Action creators are generated for each case reducer function
export const { setCurrentGame } = gameSlice.actions;

export default gameSlice.reducer;
