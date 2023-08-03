import React from "react";
import "./ScrollButton.css";
import { useEffect, useState } from "react";
function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
    console.log(window.scrollY);
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            // bottom: "50px",
            // right: "50px",
            // height: "50px",
            // fontSize: "50px",
          }}
          onClick={scrollUp}
          className="arrow"
        ></button>
      )}
    </div>
  );
}

export default BackToTopButton;
