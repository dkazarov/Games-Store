import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'currentGame',
  initialState: {
    game: {},
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.game = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentGame } = gameSlice.actions;

export default gameSlice.reducer;
