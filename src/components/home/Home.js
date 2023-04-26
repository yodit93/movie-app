import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../movieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import APIKey from '../../common/apis/MovieAPIKey';
import { addMovies } from '../../features/movies/movieSlice';

const movieText = 'Harry';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type="movie"`)
        .catch((err) => err);
      console.log(response.data);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <MovieListing />
  );
};

export default Home;
