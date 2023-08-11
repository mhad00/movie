import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NavlinkPage from "../NavlinkPage/NavlinkPage";
import SearchBar from "../SearchBar/SearchBar";
import { FaUser } from "react-icons/fa6";

const Headsearch = (user, setUserMovie) => {
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
          {user === false ? (
            <Link to="/Login">
              <span>Login</span>
            </Link>
          ) : (
            <FaUser />
          )}
        </div>
      </div>
    </>
  );
};

export default Headsearch;
