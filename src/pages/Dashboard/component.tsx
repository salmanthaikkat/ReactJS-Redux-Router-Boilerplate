import React from 'react';
import { Link } from 'react-router-dom';
import { AdminRoute } from '../../routes/AppRouter';

const Dashboard = () => {
  return (
    <div>
      <header>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact">Contact US</Link>
        </ul>
      </header>
      <AdminRoute />
    </div>
  );
};

export default Dashboard;
