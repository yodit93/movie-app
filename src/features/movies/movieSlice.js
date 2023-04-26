import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import APIKey from '../../common/apis/MovieAPIKey';

const initialState = {
  movies: [],
  isLoading: false,
};
const movieText = 'Harry';
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (_, { rejectWithValue }) => {
  try {
    const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type="movie"`);
    return response.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [fetchAsyncMovies.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      movies: action.payload,
    }),
    [fetchAsyncMovies.rejected]: ((action) => action.payload),
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = ((state) => state.movies);
export default movieSlice.reducer;
