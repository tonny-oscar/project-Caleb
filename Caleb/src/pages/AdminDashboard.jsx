import React, { useState } from 'react';
import Advertisement from '../components/Advertisement';

const AdminDashboard = () => {
  const [portfolio, setPortfolio] = useState({
    title: '',
    description: '',
    images: []
  });

  const [portfolios, setPortfolios] = useState([]); // For storing added portfolios.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortfolio({ ...portfolio, [name]: value });
  };

  const handleImageChange = (e) => {
    setPortfolio({ ...portfolio, images: [...portfolio.images, e.target.files[0]] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', portfolio.title);
    formData.append('description', portfolio.description);
    portfolio.images.forEach((image) => formData.append('images', image));

    try {
      const response = await fetch('http://localhost:5000/api/portfolios', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Portfolio added successfully!');
        setPortfolios([...portfolios, portfolio]);
        setPortfolio({ title: '', description: '', images: [] });
      } else {
        alert('Failed to add portfolio');
      }
    } catch (error) {
      console.error('Error adding portfolio:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      <p className="text-gray-600">Manage your portfolio and advertisements here.</p>
      
      {/* Portfolio Form */}
      <div className="mt-8 bg-white shadow p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Portfolio</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={portfolio.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={portfolio.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Images</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
              multiple
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          >
            Add Portfolio
          </button>
        </form>
      </div>

      {/* Display Added Portfolios */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Existing Portfolios</h2>
        {portfolios.length === 0 ? (
          <p className="text-gray-600">No portfolios added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.map((port, index) => (
              <div key={index} className="bg-white shadow p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800">{port.title}</h3>
                <p className="text-gray-600">{port.description}</p>
                <div className="mt-4">
                  {port.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={URL.createObjectURL(image)}
                      alt={`Portfolio ${idx + 1}`}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Advertisement />
    </div>
  );
};

export default AdminDashboard;
