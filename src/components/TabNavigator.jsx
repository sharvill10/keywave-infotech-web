// components/TabNavigator.js
import React from 'react';
import { Link } from 'react-router-dom';


const TabNavigator = () => {
  return (
    <div className="bg-black py-4">
      <nav>
        <ul className="flex justify-center space-x-8">
          <li>
            <Link className="text-white hover:text-secondary" to="/home">
              Home
            </Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default TabNavigator;
