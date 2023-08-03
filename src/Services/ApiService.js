import React, { useState } from "react";
const urlPoster = (url) => {
  return `https://api.themoviedb.org/3/movie/${url}?api_key=92ad04cfd3d58b260eba69def4b861b4`;
};
const urlMovieBuild = (endpoint) => {
  return `https://api.themoviedb.org/3/trending/movie/${endpoint}?api_key=92ad04cfd3d58b260eba69def4b861b4`;
};
const urlMovie = (url) => {
  return `https://api.themoviedb.org/3/movie/${url}?api_key=92ad04cfd3d58b260eba69def4b861b4`;
};
const ApiService = {
  getJson: (number) => {
    const url = urlPoster(number);
    return fetch(url).then((res) => res.json());
  },
  getMovie: (endpoint) => {
    const url = urlMovieBuild(endpoint);
    return fetch(url).then((res) => res.json());
  },
  getMoviePublic: (url) => {
    const urlMovies = urlMovie(url);
    return fetch(urlMovies).then((res) => res.json());
  },
};

export default ApiService;
