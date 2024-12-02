import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
    return (
        <div className="flex border border-gray-300 rounded-lg bg-blue-500 p-4 shadow-lg m-2 justify-center text-white">
            <img src={img} alt={name} className="w-24 h-24 rounded-full mr-4" />
            <div className="flex flex-col justify-between">
                <h3 className="text-xl font-bold">{name}</h3>
                <Rating>{rating}</Rating>
                <p>{`${car.model} - ${car.licensePlate}`}</p>
            </div>
        </div>
    );
}

export default DriverCard;