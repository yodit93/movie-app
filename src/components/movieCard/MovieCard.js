import PropTypes from 'prop-types';
import './MovieCard.scss';

const MovieCard = ({ movie }) => (
  <div className="card-item">
    <div className="card-inner">
      <div className="card-top">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="card-bottom">
        <div className="card-info">
          <h4>{movie.Title}</h4>
          <p>{movie.Year}</p>
        </div>
      </div>
    </div>
  </div>
);
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
