import React, { useState } from "react";
import UseFetchApi from "../../Hook/UseFetchApi/UseFetchApi";
import "./Carousel.css";
import { useEffect } from "react";

const Carousel = () => {
  const { data, linkPath } = UseFetchApi();
  const [logoPath, setLogoPath] = useState([]);
  const array = async (logo_path) => {
    const logoPathSrc =
      await `${linkPath?.images?.base_url}${linkPath?.images?.backdrop_sizes[3]}${logo_path}`;
    await logoPath.push(logoPathSrc);
    setLogoPath(logoPath);
  };
  useEffect(() => {
    data?.map(async (item) => {
      const { production_companies } = await item;
      console.log(production_companies);
      production_companies?.map(async (item) => {
        const { logo_path } = await item;

        return logo_path === null ? "" : array(logo_path);
      });
    });
  });
  const item = () => {
    for (let i = 0; i < logoPath.length - 5; i++) {
      return Math.floor(Math.random() * i);
    }
  };
  console.log(item());
  return (
    <>
      <div className="carousel">
        {logoPath?.slice(item(), item() + 5).map((item) => {
          console.log(item);
          return (
            <div className="logoCompany">
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
