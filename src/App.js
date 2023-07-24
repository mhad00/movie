import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Category from "./Component/Category/Category";
import Login from "./Component/Login/Login";
import Detail from "./Page/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/Category" element={<Category />}>
          Category
        </Route>
        <Route path="/Login" element={<Login />}>
          Login
        </Route>
        <Route path="/Detail" element={<Detail />}>
          Detail
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
