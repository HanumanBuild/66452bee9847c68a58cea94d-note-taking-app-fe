import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <Link to="/login" className="text-white mr-4">Login</Link>
        <Link to="/signup" className="text-white">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;