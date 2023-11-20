function generateNumbersTable(num) {
  const table = [];
  for (let i = 1; i <= num; i++) {
    table.push(i);
  }
  return table;
}

export default generateNumbersTable;
