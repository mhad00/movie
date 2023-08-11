import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Category from "./Component/Category/Category";
import Login from "./Page/Login/Login";
import Detail from "./Page/Detail/Detail";
import Fakehp from "./Page/Detail/Fakehp/Fakehp";
import { useState } from "react";
import Watchlist from "./Page/Detail/Watchlist/Watchlist";

function App() {
  const [watchList, setWatchList] = useState([]);

  const onAddMovie = (movie) => {
    const isMovieInList = watchList.find((item) => movie.id === item.id);
    if (isMovieInList) {
      return;
    } else {
      console.log("app.js addmovie",movie);
      setWatchList([...watchList, movie]);
    }
  };

  const onDeleteMovie = (id) => {
    const filteredList = watchList.filter((movie) => movie.id !== id);
    setWatchList(filteredList);
  };

  return (
    <BrowserRouter>
      
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
        <Route
          path="/fakehp/:id"
          element={<Detail addMovie={onAddMovie} deleteMovie={onDeleteMovie}  />}
        ></Route>
        <Route path="/watchlist" element={<Watchlist watchList={watchList}/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
