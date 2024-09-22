import React from 'react';
import headerLogo from '../assets/images/Keywave-logo.png';

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src={headerLogo} alt="Keywave Infotech Logo" className="h-12 w-auto" />
        </div>
        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <a href="#home" className="text-gray-800 hover:text-orange-600 transition duration-300">Home</a>
            </li> 
            <li>
              <a href="#product" className="text-gray-800 hover:text-orange-600 transition duration-300">Product</a>
            </li>
            <li>
              <a href="#about" className="text-blue-600 hover:text-blue-800 transition duration-300">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;