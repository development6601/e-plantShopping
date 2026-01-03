import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

// Landing Page Component
function LandingPage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/plants');
  };

  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="content">
        <div className="landing_content">
          <h1>Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
        <div className="aboutus_container">
          <AboutUs/>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename="/shoppingreact">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



