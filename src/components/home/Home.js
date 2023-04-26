import { useEffect, useState } from "react";
import MovieListing from "../movieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from '../../common/apis/MovieAPIKey';

const movieText = 'Hurry';
const Home = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
      .get(`?apikey=${APIKey}&s=${movieText}&type="movie"`)
      .catch ((err) => {
        return err;
      })
      return response;
    }
    fetchMovies();
  }, [])
  return (
    <MovieListing />
  );
};

export default Home;