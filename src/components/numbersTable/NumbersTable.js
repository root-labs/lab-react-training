import generateNumbersTable from "../../utils/generateNumbersTable";

function NumbersTable({ limit }) {
  const table = generateNumbersTable(limit);
  return (
    <div className="numbers-table">
      {table.map((number) => (
        <div className="numbers-table__item" key={number}>
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
