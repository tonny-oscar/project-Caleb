import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import PortfolioPage from './pages/PortfolioPage';
import ContactForm from './components/ContactForm';
import PortfolioGrid from './components/PortfolioGrid';
import Advertisement from './components/Advertisement';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/portfolio-grid" element={<PortfolioGrid />} />
      <Route path="/advertisement" element={<Advertisement />} />
    </Routes>
  </Router>
);

export default App;
