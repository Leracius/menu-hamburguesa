import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false,
    counter: 0,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    incrementCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { toggleDarkMode, incrementCounter } = themeSlice.actions;
export default themeSlice.reducer;