import React, { useState } from "react";
import "./Fakehp.css";
import Card1 from "../Card1/Card1";
import { MockData } from "../Data/MockData";
import { useEffect } from "react";
const Fakehp = () => {
  const [defaultData, setDefaultData] = useState({});
  useEffect(() => {
    setDefaultData(MockData[0]);
    console.log(MockData[0]);
  }, []);

  return (
    <div className="watchListPage">
      <div className="wlOption">1</div>
      <div className="wlSection">
        <div className="wlLSide">
          <div className="wlImg">
            <img src="" alt="" />
          </div>
          <div className="wlMovieInfo1">{defaultData.name}</div>
          <div className="wlMovieInfo2">{defaultData.type}</div>
          <hr />
          <div className="wlMovieOverview">
            <p>{defaultData.story}</p>
          </div>
        </div>

        <div className="wlRSide">
          {MockData.map((data) => {
            return (
              <Card1 key={data.id} {...data} setDefaultData={setDefaultData} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fakehp;
