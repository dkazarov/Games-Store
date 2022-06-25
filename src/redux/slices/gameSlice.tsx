import { createSlice } from '@reduxjs/toolkit';
import { ISelectedItem } from '../../@types/types';
import { RootState } from '../store';

type gameSliceState = {
  game: ISelectedItem;
};

const initialState: gameSliceState = {
  game: {
    video: '',
    description: 'title',
    genres: [],
    image: '',
    title: '',
  },
};

export const gameSlice = createSlice({
  name: 'currentGame',
  initialState,
  reducers: {
    setCurrentGame: (state, action) => {
      state.game = action.payload;
    },
  },
});
export const gameSelector = (state: RootState) => state.game;

// Action creators are generated for each case reducer function
export const { setCurrentGame } = gameSlice.actions;

export default gameSlice.reducer;
