function IdCard({
  lastName = "Doe",
  firstName = "John",
  gender = "male",
  height = "178",
  birth = "1992-07-14",
  picture = "https://randomuser.me/api/portraits/men/44.jpg",
}) {
  return (
    <div className="id-card">
      <img src={picture} alt="profile" />
      <div>
        <p>
          First Name: <span>{firstName}</span>
        </p>
        <p>
          Last Name: <span>{lastName}</span>
        </p>
        <p>
          Gender: <span>{gender}</span>
        </p>
        <p>
          Height: <span>{height}</span>
        </p>
        <p>
          Birth: <span>{birth}</span>
        </p>
      </div>
    </div>
  );
}

export default IdCard;
