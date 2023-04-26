import { useSelector } from 'react-redux';
import MovieCard from '../movieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
  const { movies, shows, isLoading } = useSelector((state) => state);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        {isLoading && <h3 className="loading">Loading...</h3>}
        <div className="movie-container">
          {movies && movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        {isLoading && <h3 className="loading">Loading...</h3>}
        <div className="show-container">
          {shows && shows.map((show) => <MovieCard key={show.imdbID} movie={show} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
