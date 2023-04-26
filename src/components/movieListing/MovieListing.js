import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../movieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log('movies', movies.Search);
  let renderMovies = '';
  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie) => <MovieCard key={movie.Title} movie={movie} />)
  ) : (<div><h3>{movies.error}</h3></div>);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
