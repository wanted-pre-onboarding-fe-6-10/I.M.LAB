import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state[payload.id] = payload;
    },
  },
});

export const { add } = movieSlice.actions;

export default movieSlice.reducer;
