function Random({ min, max }) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return <div className='container'style={{border: '1px solid #000',width:'50%',padding:'6px',margin: '10px',textAlign:'left'}}>
     Random value between {min} and{max} ={">"} {randomNumber}
     </div>;
}
export default Random;