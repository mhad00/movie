import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const [auth, setAuth] = useState("noSearch");
  const [query, setQuery] = useState([]);
  const Navigate = useNavigate();
  const onSearchHandle = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      Navigate(`/Search/${query}`);
    }
  };
  const onMoveOutHandle = () => {
    setAuth("noSearch");
  };
  const onMoveHandle = () => {
    setAuth("search");
  };
  return (
    <div className="searchBar">
      <input
        onMouseOut={onMoveOutHandle}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={onSearchHandle}
        className={auth}
      />
      <button onMouseOver={onMoveHandle}>Search</button>
    </div>
  );
};

export default SearchBar;
