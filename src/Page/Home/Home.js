import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import Carousel from "../../Component/Carousel/Carousel";
import { Outlet } from "react-router-dom";
import SwitchTab from "../../Component/SwitchTab/SwitchTab";
import UseFetchApi from "../../Hook/UseFetchApi/UseFetchApi";
import CarouselMovie from "../../Component/CarouselMovie/CarouselMovie";
import FooterProject from "../../Component/Footer/Footer";
import ScrollButton from "../../Component/Scroll/ScrollButton";
import UserProfile from "../../Component/UserProfile/UserProfile";
const Home = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { movieTrending } = UseFetchApi(endpoint);
  const onChangeTab = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="detail">
      <Header />
      <Carousel />
      <div className="movieList">
        <span>Trending Movie</span>
        <SwitchTab data={["Day", "Week"]} onChangeTab={onChangeTab} />
        <CarouselMovie movieTrending={movieTrending} />
      </div>
      <Outlet />
      <hr />
      <FooterProject />
      <ScrollButton />
    </div>
  );
};

export default Home;
