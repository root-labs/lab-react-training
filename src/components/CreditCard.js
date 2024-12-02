function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const lastFourDigits = number.slice(-4);
    
    return (
        <div 
            className="flex flex-col justify-between p-4 m-2 rounded-lg shadow-lg w-72" // Fixed width for consistency
            style={{ backgroundColor: bgColor, color: color }}
        >
            <h3 className="font-bold">{type}</h3>
            <p className="mt-2">**** **** **** {lastFourDigits}</p>
            <div className="flex justify-between mt-4">
                <div>
                    <p>Expires {expirationMonth}/{expirationYear}</p>
                    <p>{bank}</p>
                </div>
                <p>{owner}</p>
            </div>
        </div>
    );
}

export default CreditCard;