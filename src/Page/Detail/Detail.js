import React, { useState } from "react";
import "./Detail.css";
import {
  FaThumbsUp,
  FaPlay,
  FaBookmark,
  FaArrowDown,
  FaShareAlt,
} from "react-icons/fa";
import Cast from "./Cast/Cast";
import Readmore from "./ReadMore/Readmore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MockData } from "./Data/MockData";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";
import Headsearch from "../../Component/headsearch/Headsearch";
import Footer from "../../Component/Footer/Footer";

const Detail = (props) => {
  const { addMovie, deleteMovie } = props;
  const dataMovie = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const urlMovie = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=92ad04cfd3d58b260eba69def4b861b4`;
  console.log("urlmovieu", urlMovie);
  const urlImg = `https://api.themoviedb.org/3/movie/${id}?api_key=92ad04cfd3d58b260eba69def4b861b4`;
  console.log("urlimg", urlImg);
  const [movie, setMovie] = useState([]);
  const [like, setLike] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  const [dataImg, setDataImg] = useState({});
  console.log("dataImg", dataImg);
  useEffect(() => {
    fetch(urlMovie)
      .then((res) => res.json())
      .then((res) => setDataDetail(res));
    fetch(urlImg)
      .then((res) => res.json())
      .then((res) => setDataImg(res));
  }, []);

  const onLikeHandle = () => {
    setLike(!like);
  };
  return (
    <div className="detail">
      <Headsearch />
      <div className="head">
        <div className="shadow-top"></div>
        <div className="background">
          <img
            className="img"
            src={`https://image.tmdb.org/t/p/original${dataImg.backdrop_path}`}
            alt=""
          />
        </div>
        <div className="headPart">
          <div className="info">
            <p className="type"> {dataImg.release_date} </p>
            <h1 className="title">{dataImg.title}</h1>
            <p className="type2">
              {dataImg.genres?.map((item) => {
                return <p>{item.name}</p>;
              })}
            </p>
          </div>
          <div className="btn">
            <div className="btnLeft">
              <button className="btn1">
                <FaPlay size="20px" />
                Play Now
              </button>
              <button
                className="btn2"
                onClick={() => {
                  console.log(movie);
                  addMovie(dataImg);
                  navigate("/home/watchlist");
                }}
              >
                <FaBookmark size="20px" />
                Add Watchlist
              </button>
            </div>
            <div className="btnRight">
              <button className="btn3">
                <FaArrowDown size="20px" /> Download
              </button>
              <button className="btn4">
                <FaShareAlt size="20px" />
                Share
              </button>
              <button
                className="btn5"
                onClick={() => {
                  onLikeHandle();
                }}
              >
                <FaThumbsUp size="20px" />
                {like ? "Liked" : "Like"}
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-bottom"></div>
      </div>
      {/* Storyline */}
      <div className="description-detail">
        <div className="storyLine">
          <h3>Story Line</h3>
        </div>
        <div className="overview">{dataImg.overview}</div>
      </div>
      <div className="topCast">
        <h3>Top Cast</h3>
        {/* <Cast img={dataImg?.backdrop_path} /> */}
      </div>
      <Footer/>
    </div>
  );
};

export default Detail;
