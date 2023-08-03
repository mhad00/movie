import React, { useState } from "react";

const ReadMore = ({ p, max }) => {
  const [readMore, setReadMore] = useState(true);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  if (p.length <= max) {
    return <p>{p}</p>;
  }

  return (
    <div>
      <h4>{readMore ? `${p.slice(0, max)}...` : p}</h4>
      <h4 className="readMore" onClick={toggleReadMore}>{readMore ? `Show More` : `Show Less`}</h4>
    </div>
  );
};

export default ReadMore;
