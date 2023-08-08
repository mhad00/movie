import React from "react";
import "./Card1.css";
import { useEffect } from "react";
const Card1 = (props) => {
  console.log("props", props);
  const { name, img, type,story, setDefaultData,id } = props;
  return (
    <div className="card1" onClick={()=>{
        setDefaultData({name,story,type,id,img})
    }}>
      <div className="card1Img">
        <img src={img} alt="" />
      </div>
      <div className="card1Detail">
        <div className="card1Name">{name}</div>
        <div className="card1Genre">{type}</div>
      </div>
      <div className="card1Shadow-bottom"></div>
    </div>
  );
};

export default Card1;
