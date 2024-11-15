import React from 'react';

const AdminDashboard = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
    <p className="text-gray-600">Manage your portfolio and advertisements here.</p>
    {/* Add components to manage portfolios and ads */}
    <div className="mt-8">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">
        Add New Portfolio
      </button>
    </div>
  </div>
);

export default AdminDashboard;
