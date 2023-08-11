import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavlinkPage from "../NavlinkPage/NavlinkPage";
import SearchBar from "../SearchBar/SearchBar";

const Headsearch = () => {
  return (
    <>
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
    </>
  );
};

export default Headsearch;
