function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
        <div className="flex border border-black p-4 m-3">
            <img 
                src={picture} 
                alt={`${firstName} ${lastName}`} 
                className="w-24 h-24 mr-4" 
            />
            <div>
                <h2 className="text-xl font-bold">{`${firstName} ${lastName}`}</h2>
                <p className="text-gray-700">Gender: {gender}</p>
                <p className="text-gray-700">Height: {height} cm</p>
                <p className="text-gray-700">Birth: {birth.toDateString()}</p>
            </div>
        </div>
    );
}

export default IdCard;