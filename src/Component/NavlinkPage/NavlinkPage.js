import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavlinkPage.css";

const NavlinkPage = () => {
  return (
    <div className="navLinkPage">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/Category">
        <span>Category</span>
      </Link>
      <Link to="/Detail">
        <span>Detail</span>
      </Link>
      <Link to="/">
        <span>About</span>
      </Link>
      <Outlet />
    </div>
  );
};

export default NavlinkPage;
