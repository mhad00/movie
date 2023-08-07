import React, { useState } from "react";
import UseFetchApi from "../../Hook/UseFetchApi/UseFetchApi";
import "./Carousel.css";
import { useEffect } from "react";

const Carousel = () => {
  const { data, linkPath } = UseFetchApi();
  const [logoPath, setLogoPath] = useState();
  const logo = async () => {
    try {
      const img =
        (await Math.floor(Math.random())) * data?.production_companies?.length;
      return setLogoPath(
        `${linkPath?.images?.base_url}${linkPath?.images?.backdrop_sizes[3]}${data?.production_companies[img]?.logo_path}`
      );
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    logo();
  }, [logoPath]);
  return (
    <div className="carousel">
      <div className="logoCompany">
        <img src={logoPath} alt="" />
      </div>
      <div className="logoCompany">
        <img src={logoPath} alt="" />
      </div>
      <div className="logoCompany">
        <img src={logoPath} alt="" />
      </div>
      <div className="logoCompany">
        <img src={logoPath} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
