import React from 'react';
import { Link } from 'react-router-dom';
import './../css/home.css';
const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Health Tracker</h1>
      <div className="home-links">
        <Link to="/login" className="home-link">Login</Link>
        <Link to="/register" className="home-link">Register</Link>
      </div>
    </div>
  );
};

export default Home;