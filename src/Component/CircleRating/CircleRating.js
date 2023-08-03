import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./CircleRating.css";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textSize: 34,
          alignmentBaseline: "middle",
        })}
      />
    </div>
  );
};
export default CircleRating;
