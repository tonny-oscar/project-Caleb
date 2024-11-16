import React, { useState } from 'react';

const Advertisement = () => {
  const [ads, setAds] = useState([]);
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAddAd = () => {
    if (text && image) {
      setAds([...ads, { text, image }]);
      setText('');
      setImage(null);
    } else {
      alert('Please add both text and an image!');
    }
  };

  const handleRemoveAd = (index) => {
    const updatedAds = ads.filter((_, i) => i !== index);
    setAds(updatedAds);
  };

  return (
    <div className="space-y-6">
      {/* Form to Add New Advertisement */}
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Add Advertisement</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Advertisement Text</label>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter advertisement text"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Advertisement Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:bg-white file:text-sm file:font-medium file:text-blue-600 hover:file:bg-gray-100"
          />
        </div>
        <button
          onClick={handleAddAd}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Advertisement
        </button>
      </div>

      {/* Advertisement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.map((ad, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative"
          >
            <img
              src={ad.image}
              alt={ad.text}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm font-medium text-gray-700">{ad.text}</p>
            </div>
            <button
              onClick={() => handleRemoveAd(index)}
              className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
