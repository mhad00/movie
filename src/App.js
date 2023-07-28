import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Component/Category/Category";
import Login from "./Page/Login/Login";
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
          <Route path=":id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
