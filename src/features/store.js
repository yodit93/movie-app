import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movies/movieSlice';

const store = configureStore({
  reducer: movieReducer,
});

export default store;
