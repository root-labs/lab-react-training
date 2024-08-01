export default function Rating({ children }) {
    const value = Math.max(0, Math.min(5, parseFloat(children)));
    
    const roundedValue = Math.round(value);
    
    const stars = Array.from({ length: 5 }, (_, index) => 
        index < roundedValue ? '★' : '☆'
    );

    return (
        <div>
            {stars.join(' ')}
        </div>
    );
}