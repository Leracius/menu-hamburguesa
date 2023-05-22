import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false,
    counter: 0,
    pokepath: "",
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    incrementCounter: (state, action) => {
      state.counter = action.payload;
    },
    togglePath: (state, action) => {
      state.pokepath = action.payload
    },
  },
});

export const { toggleDarkMode, incrementCounter, togglePath } = themeSlice.actions;
export default themeSlice.reducer;