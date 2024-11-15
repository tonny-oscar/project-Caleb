import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import Advertisement from '../components/Advertisement';

const Home = () => {
  const portfolios = [
    { id: 1, image: '/src/assets/images/pexels-fotios-photos-1090638 (1).jpg', title: 'Modern Living Room', description: 'A beautiful modern living room.' },
    { id: 2, image: '/img2.jpg', title: 'Cozy Bedroom', description: 'A warm and cozy bedroom.' },
  ];

  return (
    <div className="space-y-8">
      <Advertisement
        image="/ad.jpg"
        text="Check out our latest designs!"
      />
      <div className="px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Portfolio</h1>
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
      </div>
    </div>
  );
};

export default Home;
