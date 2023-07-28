import React from "react";
import UseFetchApi from "../../Hook/UseFetchApi/UseFetchApi";
import "./CarouselMovie.css";

const CarouselMovie = ({ movieTrending }) => {
  const data = movieTrending.map(({ poster_path, title, id }) => {
    console.log(`https://image.tmdb.org/t/p/original${poster_path}`);
    return (
      <div key={id} className="movieItem">
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
      </div>
    );
  });
  return <div className="movieItems">{data}</div>;
};

export default CarouselMovie;
