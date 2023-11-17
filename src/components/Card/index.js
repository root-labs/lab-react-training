import "./Card.css";

export default function idCard(props) {
  const { firstName, lastName, gender, height, picture, birth } = props;

  return (
    <div className="container">
      <div className="userImage">
        <img src={picture} alt="" />
      </div>
      <div className="personal-info">
        <p>
          <strong>First name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>height:</strong> {height}
        </p>
        <p>
          <strong>Birth:</strong> {birth.toDateString()}
        </p>
      </div>
    </div>
  );
}
