import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShow } from '../../features/movies/movieSlice';
import './MovieDetail.scss';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const movie = useSelector((state) => state.selectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShow(imdbID));
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      <div className="section-left">
        <h2 className="movie-title">{movie.Title}</h2>
        <div className="movie-rating">
          <span>
            IMDB Rating
            <i className="fa fa-star" />
            :
            {' '}
            {movie.imdbRating}
          </span>
          <span>
            IMDB Votes
            <i className="fa fa-thumbs-up" />
            :
            {' '}
            {movie.imdbVotes}
          </span>
          <span>
            Runtime
            <i className="fa fa-film" />
            :
            {' '}
            {movie.Runtime}
          </span>
          <span>
            Year
            <i className="fa fa-calendar" />
            :
            {' '}
            {movie.Year}
          </span>
        </div>
        <div className="movie-plot">{movie.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{movie.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{movie.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{movie.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{movie.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{movie.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;
