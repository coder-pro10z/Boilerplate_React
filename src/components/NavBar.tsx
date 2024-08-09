import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Import a FontAwesome icon
import Menu from './Menu';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-white font-bold text-xl">
          MyApp
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
