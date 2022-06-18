import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
  },
  reducers: {
    setAllDataFromServer: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllDataFromServer } = dataSlice.actions;

export default dataSlice.reducer;
