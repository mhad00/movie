import React, { useState } from "react";

function ReadMore({ children, maxLength }) {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  if (children.length <= maxLength) {
    return <p>{children}</p>;
  }

  return (
    <div>
      <p>{isTruncated ? `${children.slice(0, maxLength)}...` : children}</p>
      <p
        style={{
          fontStyle: "italic",
          textDecoration: "underline",
          margin: "20px 0 0 0",
          cursor:"pointer",
          width:"fit-content"
        }}
        onClick={toggleTruncate}
      >
        {isTruncated ? "Show More" : "Show Less"}
      </p>
    </div>
  );
}

export default ReadMore;
