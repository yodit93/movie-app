import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../movieListing/MovieListing';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <MovieListing />
  );
};

export default Home;
