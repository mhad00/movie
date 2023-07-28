import React from "react";
import NavlinkPage from "../NavlinkPage/NavlinkPage";
import { Link } from "react-router-dom";
import "./Header.css";
import UseFetchApi from "../../Hook/UseFetchApi/UseFetchApi";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const { data, loading, linkPath, error, description } = UseFetchApi();
  const bg = `${linkPath?.images?.base_url}${linkPath?.images?.backdrop_sizes[3]}${data?.backdrop_path}`;
  const date = new Date(data.release_date);
  const dateElm = date.toDateString();
  return (
    <div className="Header">
      <img src={bg} alt="" />
      <div className="opacity-layer"></div>
      <div className="heroSearch">
        <div>
          <Link
            to="/"
            style={{
              display: "flex",
            }}
          >
            <img src="" alt="" />
            <p
              style={{
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              MovieMaster
            </p>
          </Link>
        </div>
        <NavlinkPage />
        <div className="searchRight">
          <SearchBar />
          <Link to="/Login">
            <span>Login</span>
          </Link>
        </div>
      </div>
      <div className="description">
        <h2>{data.original_title}</h2>
        <h5>{dateElm}</h5>
        <p>{description?.description}</p>
      </div>
      <div className="button_travel">
        <button
          style={{
            backgroundColor: "#17aa17b8",
          }}
        >
          Play Now
        </button>
        <button
          style={{
            backgroundColor: "rgb(146 137 137 / 17%)",
          }}
        >
          Watch Trailer
        </button>
        <button
          style={{
            backgroundColor: "rgb(21 10 168 / 35%)",
          }}
        >
          Add Watchlist
        </button>
      </div>
    </div>
  );
};

export default Header;
