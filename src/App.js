import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Category from "./Component/Category/Category";
import Login from "./Page/Login/Login";
import Detail from "./Page/Detail/Detail";
import Fakehp from "./Page/Detail/Fakehp/Fakehp";
import { useState } from "react";
import Watchlist from "./Page/Detail/Watchlist/Watchlist";
import { createContext } from "react";
import NavlinkPage from "./Component/NavlinkPage/NavlinkPage";
import SearchBar from "./Component/SearchBar/SearchBar";
import Headsearch from "./Component/headsearch/Headsearch";

function App() {
  const [watchList, setWatchList] = useState([]);

  const onAddMovie = (movie) => {
    const isMovieInList = watchList.find((item) => movie.id === item.id);
    if (isMovieInList) {
      return;
    } else {
      console.log("app.js addmovie", movie);
      setWatchList([...watchList, movie]);
    }
  };

  const onDeleteMovie = (id) => {
    const filteredList = watchList.filter((movie) => movie.id !== id);
    setWatchList(filteredList);
  };
  const AppContext = createContext();
  const [dataMovie, setDataMovie] = useState();
  return (
    <BrowserRouter>
      <AppContext.Provider value={{ dataMovie, setDataMovie }}>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/category" element={<Category />}>
            Category
          </Route>
          <Route
            path="/home/:id"
            element={
              <Detail addMovie={onAddMovie} deleteMovie={onDeleteMovie} />
            }
          ></Route>
          <Route
            path="/watchlist"
            element={<Watchlist watchList={watchList} />}
          ></Route>

          <Route path="/login" element={<Login />}>
            Login
          </Route>
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
