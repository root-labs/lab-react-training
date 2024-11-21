import React from 'react';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  return (
    <div
      className="w-80 h-48 rounded-xl shadow-lg p-6 text-white flex flex-col justify-between"
      style={{ backgroundColor: bgColor, color: color }}
    >
      {/* Card Type */}
      <div className="flex justify-end items-center mb-4">
        <span className="uppercase text-lg">{type}</span>
      </div>

      {/* Card Number */}
      <div className="text-2xl font-mono tracking-widest mb-4">
        {number.replace(/\d{4}(?= \d{4})/g, '****')} {/* Mask all but last 4 digits */}
      </div>

      {/* Card Details */}
      <div className="text-sm flex justify-start">
    
          <span className='mr-1' >Expires</span>
          <span>{`${expirationMonth}/${expirationYear.toString().slice(-2)}`}</span>
          <span className="ml-5">{bank}</span>
        
       
      </div>
      <span>{owner}</span>
    </div>
  );
};

export default CreditCard;
