import React from 'react';

const PortfolioCard = ({ image, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img
      src={image}
      alt={title}
      className="h-64 w-full object-cover"
    />
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

export default PortfolioCard;
