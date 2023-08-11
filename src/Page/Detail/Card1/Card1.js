import React from "react";
import "./Card1.css";
import { useEffect } from "react";
const Card1 = (props) => {
  console.log("props", props);
  const { title, poster_path, type,story, setDefaultData,id } = props;
  return (
    <div className="card1" onClick={()=>{
        setDefaultData({title,story,type,id,poster_path})
    }}>
      <div className="card1Img">
        {/* <img src={1} alt="" /> */}
      </div>
      <div className="card1Detail">
        <div className="card1Name">{title}</div>
        <div className="card1Genre">{type}</div>
      </div>
      <div className="card1Shadow-bottom"></div>
    </div>
  );
};

export default Card1;
