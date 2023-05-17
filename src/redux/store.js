import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Theme/ThemeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer, // Agregar el reducer del slice theme
  },
});

export default store;