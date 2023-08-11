import React, { useRef, useState } from "react";
import UseFetchApi from "../../Hook/UseFetchApi/UseFetchApi";
import "./CarouselMovie.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import CircleRating from "../CircleRating/CircleRating";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";

const CarouselMovie = ({ movie, loading }) => {
  const setDataMovie = useContext(AppContext);
  const [prev, setPrev] = useState(6);
  const carouselContainer = useRef();
  const navigation = (direction) => {
    prev >= 6
      ? direction === "right"
        ? prev >= movie.length
          ? setPrev(prev)
          : setPrev(prev + 1)
        : prev < 7
        ? setPrev(6)
        : setPrev(prev - 1)
      : setPrev(6);
  };
  const fadeMovie = (direction) => {};
  const skeleton = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="movieCarousel">
      {!loading ? (
        <div className="carouselItems " ref={carouselContainer}>
          <GoArrowRight
            className="arrowRight arrow fade"
            onClick={() => navigation("right")}
          />
          <GoArrowLeft
            className="arrowLeft arrow fade"
            onClick={() => navigation("left")}
          />
          {movie
            .slice(prev - 6, prev)
            .map(
              (
                { poster_path, title, release_date, vote_average, id },
                idMovie
              ) => {
                const date = new Date(release_date);
                const dateElm = date.toDateString();
                // const data = () => setDataMovie(id);
                // data();
                return (
                  <div key={idMovie} className="carouselItem fade">
                    <Link to={`home/${id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        alt=""
                      />

                      <div className="opacity-layer1"></div>
                      <CircleRating rating={vote_average.toFixed(1)} />
                      <div className="textBlock">
                        <p className="titleMovie">{title}</p>
                        <p className="date">{dateElm}</p>{" "}
                      </div>
                    </Link>
                  </div>
                );
              }
            )}
        </div>
      ) : (
        <div className="loadingSkeleton">
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
        </div>
      )}
    </div>
  );
};

export default CarouselMovie;
