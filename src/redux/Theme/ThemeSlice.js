import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false, // Estado inicial de darkMode
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode; // Cambiar el estado de darkMode
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;