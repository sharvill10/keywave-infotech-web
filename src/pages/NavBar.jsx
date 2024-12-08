import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/images/Keywave Infotech - Color Logo White Text.png';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes, FaSitemap, FaCut, FaTools, FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ cartItemCount = 0 }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const ProductDropdown = ({ mobile = false, closeMobileMenu }) => {
    const productItems = [
        {
            icon: FaSitemap,
            title: 'Splicers',
            path: '/products',
            description: 'Advanced Fusion Splicer Equipment',
        },
        {
            icon: FaCut,
            title: 'Cleaver',
            path: '/products',
            description: 'Precision Fiber Cleaving Tools',
        },
        {
            icon: FaTools,
            title: 'Accessories',
            path: '/products',
            description: 'Comprehensive Fiber Optic Solutions',
        },
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center text-xl text-white hover:text-cyan-300 transition-all"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
            >
                Products
                {isDropdownOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>

            <AnimatePresence>
                {isDropdownOpen && (
                    <motion.div
                        className={`${
                            mobile ? ' bg-white  ' : 'absolute mt-2 w-64 bg-white shadow-lg rounded-md p-4 z-50'
                        }`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {productItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="flex items-center p-3 rounded-lg hover:bg-gray-100 text-gray-800 transition-all"
                                onClick={() => {
                                    setIsDropdownOpen(false); // Close dropdown
                                    if (mobile) closeMobileMenu(); // Close mobile menu
                                }}
                            >
                                <item.icon className="mr-3 text-2xl text-cyan-600" />
                                <div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    {mobile && <p className="text-sm text-gray-500">{item.description}</p>}
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};



const NavLinks = ({ mobile = false }) => (
  <>
      <motion.li whileHover={{ scale: 1.05 }} className="text-xl text-white hover:text-cyan-400 transition-all">
          <Link to="/" onClick={() => mobile && setIsMobileMenuOpen(false)}>
              Home
          </Link>
      </motion.li>

      <li className={`${mobile ? 'w-full' : 'relative'}`}>
          <ProductDropdown mobile={mobile} closeMobileMenu={() => setIsMobileMenuOpen(false)} />
      </li>

      <motion.li whileHover={{ scale: 1.05 }} className="text-xl text-white hover:text-cyan-400 transition-all">
          <Link to="/about" onClick={() => mobile && setIsMobileMenuOpen(false)}>
              About Us
          </Link>
      </motion.li>

      <motion.li whileHover={{ scale: 1.05 }} className="text-xl text-white hover:text-cyan-400 transition-all">
          <Link to="/login" onClick={() => mobile && setIsMobileMenuOpen(false)}>
              Login
          </Link>
      </motion.li>
  </>
);


  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/">
          <motion.img
            src={headerLogo}
            alt="Keywave Infotech Logo"
            className="h-14 w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <NavLinks />
          {/* Cart Icon */}
          <li>
            <Link to="/cart" className="relative flex items-center">
              <FaShoppingCart className="text-2xl hover:text-cyan-400 transition-all" aria-label="Cart" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md"
          >
            <div className="container mx-auto py-8 px-6">
              <ul className="space-y-4">
                <NavLinks mobile />
                {/* Mobile Cart Icon */}
                <li>
                  <Link to="/cart" className="flex items-center text-xl text-white hover:text-cyan-400">
                    <FaShoppingCart className="mr-3 text-2xl" aria-label="Cart" />
                    Cart
                    {cartItemCount > 0 && (
                      <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
