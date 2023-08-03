import React, { useEffect } from "react";
import { useState } from "react";
import ApiService from "../../Services/ApiService";

const UseFetchMovieCarousel = (endpoint) => {
  const [loadingTrending, setLoadingTrending] = useState(false);
  const [movieTrending, setMovieTrending] = useState([]);
  const onHandleFetchMovie = async () => {
    await setLoadingTrending(true);
    const movieTrending = await ApiService.getMovie(endpoint);
    await setMovieTrending(movieTrending.results);
    setLoadingTrending(false);
  };
  useEffect(() => {
    onHandleFetchMovie();
  }, [endpoint]);
  return { movieTrending, loadingTrending };
};
export default UseFetchMovieCarousel;
