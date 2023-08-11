import React from "react";
import "./Cast.css";
import { Link } from "react-router-dom";
const Cast = (img) => {
  console.log(img);
  const { dataImg } = img;
  return (
    <Link className="castDetail">
      <div className="charImg">
        <img
          src={`https://image.tmdb.org/t/p/original/${dataImg.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="actor">
        <h2>name1222222222222222223</h2>
        <h3>actor123456789 101111112</h3>
      </div>
    </Link>
  );
};

export default Cast;
