import React from "react";

const HomepageDetail = {
  getDescription: (id) => {
    const url = `https://api.themoviedb.org/3/list/${id}?api_key=92ad04cfd3d58b260eba69def4b861b4`;
    return fetch(url).then((res) => res.json());
  },
};

export default HomepageDetail;
