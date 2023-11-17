import getStarts from "../../utils/getStarts";

function Rating({ children }) {
  const stars = getStarts(children);
  return <p>{stars.join("")}</p>;
}

export default Rating;
