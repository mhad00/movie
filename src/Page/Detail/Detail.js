import React, { useState } from "react";
import "./Detail.css";
import {
  FaThumbsUp,
  FaPlay,
  FaBookmark,
  FaArrowDown,
  FaShareAlt,
} from "react-icons/fa";
const Detail = () => {
  const [like, setLike] = useState(false);

  const onLikeHandle = () => {
    setLike(!like);
  };
  return (
    <div className="detail">
      <div className="head">
          <div className="shadow-top"></div>
        <div className="background">
          
          <img className="img" src="./endgame.jpg" alt="" />
        </div>
        <div className="headPart">
          <div className="info">
            <p className="type"> 123458 </p>
            <h1 className="title">Lorem ipsum dolor sit amet.</h1>
            <p className="type2">Lorem ipsum dolor sit.</p>
          </div>
          <div className="btn">
            <div className="btnLeft">
              <button className="btn1">
                <FaPlay size="20px" />
                Play Now
              </button>
              <button className="btn2">
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
      <div className="description">
        <div className="storyLine">Story Line</div>
        <div className="overview">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod maxime
          nam explicabo est, alias exercitationem laboriosam assumenda deleniti
          reiciendis voluptate sint quas omnis mollitia non voluptatem, sapiente
          earum. Dolore vero sapiente praesentium est, excepturi iste ut
          blanditiis deleniti dolores fugit tempora quasi eaque minima optio
          tempore dolorem reprehenderit autem omnis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eos quidem, at rerum quaerat magnam
          praesentium odit voluptas ipsa quo aperiam? Eaque, accusantium. Ipsa,
          harum quisquam omnis, accusamus modi ut quibusdam officiis velit optio
          error voluptas cum, corrupti repellendus ab iure eum commodi obcaecati
          cumque cupiditate? Saepe neque, praesentium ratione qui iusto totam
          nostrum sapiente atque beatae debitis, nesciunt quas minima, eius
          fugit sint ipsum consequatur provident recusandae. Nulla temporibus
          voluptatibus impedit libero voluptates eum omnis enim et labore
          distinctio nam reiciendis quo animi, sequi consequatur dolor illo
          tenetur. Eligendi, a facilis illo nihil reiciendis est? Accusantium,
          rerum. Vel, voluptas? Error?
        </div>
      </div>
      <div className="topCast">
        Top Cast
        <div className="cast"></div>
      </div>
    </div>
  );
};

export default Detail;
