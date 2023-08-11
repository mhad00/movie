import React, { useState } from "react";
import "./Watchlist.css";
import Card1 from "../Card1/Card1";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const Watchlist = (props) => {
  const { watchList, deleteMovie } = props;
  const [defaultData, setDefaultData] = useState({});
  // const {id} = useParams()
 
  useEffect(() => {
    console.log("watchlist: ", watchList);
    setDefaultData(watchList);
  }, [watchList]);
  return (
    <div className="watchListPage">
      <div className="wlOption">1</div>
      <div className="wlSection">
        <div className="wlLSide">
          <div className="wlImg">
            <img src="" alt="" />
          </div>
          <div className="wlMovieInfo1">{defaultData.title}</div>
          <div className="wlMovieInfo2">{defaultData.type}</div>
          <hr />
          <div className="wlMovieOverview">
            <p>{defaultData.story}</p>
          </div>
          <div className="wlWatch">
            <Link to={`/home/${defaultData.id}`}> Watch</Link>
          </div>
        </div>

        <div className="wlRSide">
          {watchList.map((data) => {
            return (
              <Card1 key={data.id} {...data} setDefaultData={setDefaultData} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
