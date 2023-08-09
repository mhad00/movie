import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Category from "./Component/Category/Category";
import Login from "./Page/Login/Login";
import Detail from "./Page/Detail/Detail";
import Fakehp from "./Page/Detail/Fakehp/Fakehp";
import { useState } from "react";

function App() {
  const [watchlist, setWatchList] = useState([]);
  const onAddMovie = (movie) => {
    const newMovie = {
      ...movie,
    };
    setWatchList([...watchlist, newMovie]);
  };

  return (
    <BrowserRouter>
      <div
        style={{ width: "auto", height: "100px", backgroundColor: "pink" }}
      ></div>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/category" element={<Category />}>
          Category
        </Route>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route
          path="/fakehp"
          element={<Fakehp addMovie={onAddMovie} />}
        ></Route>
        <Route path="/fakehp/:id" element={<Detail />}></Route>
      </Routes>
      <div
        style={{ width: "auto", height: "300px", backgroundColor: "pink" }}
      ></div>
    </BrowserRouter>
  );
}

export default App;
