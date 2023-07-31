import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Category from "./Component/Category/Category";
import Login from "./Page/Login/Login";
import Detail from "./Page/Detail/Detail";
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
        <Route path="/detail" element={<Detail addMovie={onAddMovie} />}>
          <Route path=":id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
