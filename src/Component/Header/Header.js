import React, { useRef } from "react";
import NavlinkPage from "../NavlinkPage/NavlinkPage";
import { Link } from "react-router-dom";
import "./Header.css";
import UseFetchApi from "../../Hook/UseFetchApi/UseFetchApi";
import SearchBar from "../SearchBar/SearchBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Header = () => {
  const { data, loading, linkPath, error, description } = UseFetchApi();
  console.log("data", data);
  console.log(`linkpath`,linkPath);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {data?.map((item) => {
          const bg = `${linkPath?.images?.base_url}${linkPath?.images?.backdrop_sizes[3]}${item?.backdrop_path}`;
          const date = new Date(item.release_date);
          const dateElm = date.toDateString();
          return (
            <SwiperSlide>
              <div className="Header">
                <Link to="/Detail">
                  <img src={bg} alt="" />
                  <div className="opacity-layer"></div>
                  <div className="description">
                    <h2>{item.original_title}</h2>
                    <h4>{dateElm}</h4>
                    <p>{item.overview}</p>
                  </div>
                </Link>
                <div className="button_travel">
                  <Link to="/Detail">
                    <button
                      style={{
                        backgroundColor: "#17aa17b8",
                      }}
                    >
                      Play Now
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      style={{
                        backgroundColor: "rgb(146 137 137 / 17%)",
                      }}
                    >
                      Watch Trailer
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      style={{
                        backgroundColor: "rgb(21 10 168 / 35%)",
                      }}
                    >
                      Add Watchlist
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div
          className="autoplay-progress"
          slot="container-end"
          style={{ display: "none" }}
        >
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Header;
