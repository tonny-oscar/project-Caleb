import React from 'react';

const PortfolioCard = ({ image, title, description }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={image} alt={title} className="h-64 w-full object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const PortfolioGrid = ({ portfolios }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {portfolios.map((portfolio) => (
      <PortfolioCard
        key={portfolio.id}
        image={portfolio.image}
        title={portfolio.title}
        description={portfolio.description}
      />
    ))}
  </div>
);

export default PortfolioGrid;
