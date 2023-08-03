import React from "react";
import { useState } from "react";
import ApiService from "../../Services/ApiService";
import { useEffect } from "react";

const UseFetchMoviePublic = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const onHandleFetchTheater = async () => {
    await setLoading(true);
    const movieItem = await ApiService.getMoviePublic(endpoint);
    await setMovie(movieItem.results);
    setLoading(false);
  };
  useEffect(() => {
    onHandleFetchTheater();
  }, [endpoint]);
  return { movie, loading };
};

export default UseFetchMoviePublic;
