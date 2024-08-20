import "./NumbersTable.css";

function NumbersTable({ limit }) {
  let numOfBoxes = [...Array(limit).keys()].map((i) => i + 1);
  let listBoxes = numOfBoxes.map((num) => (
    <div
      className={num % 2 === 0 ? "red-box" : "white-box"}
      key={num.toString()}
    >
      {num}
    </div>
  ));
  return <div id="table">{listBoxes}</div>;
}
export default NumbersTable;
