import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../movieListing/MovieListing';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <MovieListing />
  );
};

export default Home;
