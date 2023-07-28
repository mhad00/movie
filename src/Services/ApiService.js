import React, { useState } from "react";
const url = `https://api.themoviedb.org/3/movie/${
  Math.floor(Math.random() * 100) * Math.floor(Math.random() * 100)
}?api_key=92ad04cfd3d58b260eba69def4b861b4`;
const urlMovieBuild = (endpoint) => {
  return `https://api.themoviedb.org/3/trending/movie/${endpoint}?api_key=92ad04cfd3d58b260eba69def4b861b4`;
};
const ApiService = {
  getJson: async () => {
    console.log(url);
    return await fetch(url).then((res) => res.json());
  },
  getMovie: (movieType) => {
    const url = urlMovieBuild(movieType);
    console.log(url);
    return fetch(url).then((res) => res.json());
  },
};

export default ApiService;
