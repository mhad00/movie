import React from "react";

const url =
  "https://api.themoviedb.org/3/configuration?api_key=92ad04cfd3d58b260eba69def4b861b4";
const HttpService = {
  linkPath: () => {
    return fetch(url).then((res) => res.json());
  },
};

export default HttpService;
