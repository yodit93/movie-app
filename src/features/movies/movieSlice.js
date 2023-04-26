import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import APIKey from '../../common/apis/MovieAPIKey';

const initialState = {
  movies: [],
  shows: [],
  selectedMovieOrShow: {},
  isLoading: false,
};
const movieText = 'Harry';
const seriesText = 'Friends';
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (_, { rejectWithValue }) => {
  try {
    const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type="movie"`);
    return response.data.Search;
  } catch (err) {
    return rejectWithValue(err);
  }
});
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (_, { rejectWithValue }) => {
  try {
    const response = await movieApi.get(`?apikey=${APIKey}&s=${seriesText}&type="series"`);
    return response.data.Search;
  } catch (err) {
    return rejectWithValue(err);
  }
});
export const fetchAsyncMovieOrShow = createAsyncThunk('movies/fetchAsyncMovieOrShow', async (id, { rejectWithValue }) => {
  try {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot="full"`);
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
    [fetchAsyncShows.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [fetchAsyncShows.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      shows: action.payload,
    }),
    [fetchAsyncShows.rejected]: ((action) => action.payload),
    [fetchAsyncMovieOrShow.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      selectedMovieOrShow: action.payload,
    }),
  },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
