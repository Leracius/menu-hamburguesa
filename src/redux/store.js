import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Theme/ThemeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;