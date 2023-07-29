import React from "react";
import "./Cast.css";
import {Link, link} from "react-router-dom"
const Cast = () => {
  return (
      <Link to="/" className="castDetail">
        <div className="charImg">
          <img src="./fight.jpg" alt="" />
        </div>
        <div className="actor">
          <h2>name1222222222222222223</h2>
          <h3>actor123456789 101111112</h3>
        </div>
      </Link>
  );
};

export default Cast;
