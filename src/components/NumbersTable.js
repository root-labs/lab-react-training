export default function NumbersTable({ limit }) {
    const numbersTable ={
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 4fr))',
        gridGap: '5px',
        padding: '10px',
        fontSize: '1.8rem'
      }
    return (
      <div className="numbers-table" style={numbersTable}>
        {Array.from({ length: limit }, (_, index) => index + 1).map((number) => (
          <div key={number} style={{ display:'flex',backgroundColor: number % 2 === 0 ? 'red' : 'white',color:number % 2 === 0 ? 'white' : 'black' ,border: '1px solid black',
        padding: '5px',alignItems:'center',width:'200px',height:'100px',
        textAlign: 'center',justifyContent:'center'}}>
            {number}
          </div>
        ))}
      </div>
    );
  }