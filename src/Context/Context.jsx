import React from "react";
import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const value = {
    dataMovie,
    setDataMovie,
  };
  return <AppContext.Provider value={value}></AppContext.Provider>;
};

export { AppContext, AppProvider };
