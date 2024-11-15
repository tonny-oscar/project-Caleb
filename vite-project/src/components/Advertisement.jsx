import React from 'react';

const Advertisement = ({ image, text }) => (
  <div className="bg-gray-100 p-6 flex items-center justify-between">
    <p className="text-lg font-medium">{text}</p>
    <img src={image} alt="Advertisement" className="h-16" />
  </div>
);

export default Advertisement;
