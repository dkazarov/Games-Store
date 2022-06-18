import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getDatabase, ref, child, get } from 'firebase/database';

export const getAllData = createAsyncThunk('data', async (thunkAPI) => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `games/`));
  if (snapshot.exists()) {
    snapshot.val();
  } else {
    alert('This is an error alert — check it out!');
    console.log('This is an error alert — check it out!');
  }
  return snapshot.val();
});

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    isLoading: true,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getAllData.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [getAllData.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const dataSelector = (state) => state.data;

export const { setAllDataFromServer } = dataSlice.actions;

export default dataSlice.reducer;
