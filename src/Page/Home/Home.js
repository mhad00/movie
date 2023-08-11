import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Carousel from "../../Component/Carousel/Carousel";
import { Link, Outlet } from "react-router-dom";
import SwitchTab from "../../Component/SwitchTab/SwitchTab";
import "./Home.css";
import CarouselMovie from "../../Component/CarouselMovie/CarouselMovie";
import UseFetchMovieCarousel from "../../Hook/UseFetchMovieCarousel/UseFetchMovieCarousel";
import UseFetchMoviePublic from "../../Hook/UseFetchMoviePublic/UseFetchMoviePublic";
import NavlinkPage from "../../Component/NavlinkPage/NavlinkPage";
import SearchBar from "../../Component/SearchBar/SearchBar";
import Headsearch from "../../Component/headsearch/Headsearch";
import Footer from "../../Component/Footer/Footer";

const Home = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { movieTrending, loadingTrending } = UseFetchMovieCarousel(endpoint);

  const { movie: moviePopular, loading: loadingPopular } =
    UseFetchMoviePublic("popular");
  const { movie: movieNowPlaying, loading: loadingNowPlaying } =
    UseFetchMoviePublic("now_playing");
  const { movie: movieTopRated, loading: loadingTopRated } =
    UseFetchMoviePublic("top_rated");
  const { movie: movieUpComing, loading: loadingUpComing } =
    UseFetchMoviePublic("upcoming");
  const onChangeTab = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="homePage">
      
    <Headsearch/>
      <Header />
      <Carousel />
      <div className="movieList">
        <span>Trending Movie</span>
        <SwitchTab data={["Day", "Week"]} onChangeTab={onChangeTab} />
        <CarouselMovie movie={movieTrending} loading={loadingTrending} />
      </div>
      <div className="movieList">
        <span>Popular</span>
        <CarouselMovie movie={moviePopular} loading={loadingPopular} />
      </div>
      <div className="movieList">
        <span>Now Playing</span>
        <CarouselMovie movie={movieNowPlaying} loading={loadingNowPlaying} />
      </div>
      <div className="movieList">
        <span>Top Rating</span>
        <CarouselMovie movie={movieTopRated} loading={loadingTopRated} />
      </div>
      <div className="movieList">
        <span>Up Coming</span>
        <CarouselMovie movie={movieUpComing} loading={loadingUpComing} />
      </div>

      <Outlet />
      <Footer/>
    </div>
  );
};

export default Home;
