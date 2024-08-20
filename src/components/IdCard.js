import "./IdCard.css";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  let heightM = `${height / 100}m`;
  let dob = birth.toDateString();
  return (
    <div id="card">
      <img src={picture} alt="imae" />
      <div>
        <div>
          <strong>First Name</strong>
          <span>: {firstName}</span>
        </div>
        <div>
          <strong>Last Name</strong>
          <span>: {lastName}</span>
        </div>
        <div>
          <strong>Gender</strong>
          <span>: {gender}</span>
        </div>
        <div>
          <strong>Height</strong>
          <span>: {heightM}</span>
        </div>
        <div>
          <strong>Birth</strong>
          <span>: {dob}</span>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
