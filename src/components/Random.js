import "./Random.css";

function Random({ min, max }) {
  let randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return (
    <div id="rbox">
      Random value between {min} and {max} {"=>"} {randomNumber}{" "}
    </div>
  );
}

export default Random;
