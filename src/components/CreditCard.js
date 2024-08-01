export default function CreditCard(props) {
    const {
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color
    } = props;

    const lastFourDigits = number.slice(-4);

    const formattedMonth = expirationMonth.toString().padStart(2, '0');
    const formattedYear = expirationYear.toString().slice(-2);

    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
        width: '300px',
        height: '180px',
        borderRadius: '10px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Arial, sans-serif',
        color: color,
        position: 'relative'
    };

    const logoStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '24px'
    };

    const cardNumberStyle = {
        fontSize: '24px',
        letterSpacing: '2px'
    };

    const infoStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '14px'
    };

    return (
        <div style={cardStyle}>
            <div style={logoStyle}>
                {type === 'Visa' ? 'V' : 'M'}
            </div>
            <div style={cardNumberStyle}>
                **** **** **** {lastFourDigits}
            </div>
            <div style={infoStyle}>
                <div>{bank}</div>
                <div>{formattedMonth}/{formattedYear}</div>
            </div>
            <div>{owner}</div>
        </div>
    );
}