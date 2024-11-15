import React from 'react';
import PortfolioGrid from '../components/PortfolioGrid';

const PortfolioPage = () => {
  const portfolios = [
    { id: 1, image: '/img1.jpg', title: 'Modern Living Room', description: 'A beautiful modern living room.' },
    { id: 2, image: '/img2.jpg', title: 'Cozy Bedroom', description: 'A warm and cozy bedroom.' },
  ];

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Our Portfolio</h1>
      <PortfolioGrid portfolios={portfolios} />
    </div>
  );
};

export default PortfolioPage;
