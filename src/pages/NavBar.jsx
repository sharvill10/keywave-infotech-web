import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/images/Keywave Infotech - Color Logo White Text.png';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes, FaSitemap, FaCut, FaTools } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  const ProductDropdown = ({ mobile = false }) => {
    const productItems = [
      {
        icon: FaSitemap,
        title: 'Splicers',
        path: '/products/',
        description: 'Advanced Fusion Splicer Equipment',
      },
      {
        icon: FaCut,
        title: 'Cleaver',
        path: '/products/',
        description: 'Precision Fiber Cleaving Tools',
      },
      {
        icon: FaTools,
        title: 'Accessories',
        path: '/products/',
        description: 'Comprehensive Fiber Optic Solutions',
      },
    ];
  
    const closeDropdown = () => {
      setIsDropdownOpen(false);
    };
  
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className={`
            flex items-center justify-between w-full 
            ${mobile ? 'text-xl text-white' : 'text-xl text-white'} 
            hover:text-cyan-300 transition-colors
          `}
        >
          Products
          {isDropdownOpen ? (
            <FaChevronUp className="ml-2" />
          ) : (
            <FaChevronDown className="ml-2" />
          )}
        </button>
  
        <AnimatePresence>
  {isDropdownOpen && (
    <motion.div
      className={`
        ${mobile
          ? ' rounded-lg mt-2  space-y-4' 
          : 'absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 z-50'} 
      `}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {productItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`
            flex items-center p-3 rounded-lg transition-all duration-300
            ${mobile
              ? 'hover:bg-cyan-600 text-white' 
              : 'hover:bg-gray-100 text-gray-800'} // Web hover effect
          `}
          onClick={() => {
            closeDropdown();
            if (mobile) setIsMobileMenuOpen(false);
          }}
        >
          <item.icon
            className={`
              mr-3 text-2xl 
              ${mobile ? 'text-white' : 'text-cyan-600'}
            `}
          />
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            {mobile && (
              <p className="text-sm text-gray-300">{item.description}</p>
            )}
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
      <motion.li 
        whileHover={{ scale: 1.05 }} 
        className={`flex items-center text-xl font-medium text-white hover:text-cyan-400 transition-all duration-300 ${mobile ? ' w-full' : ''}`}
      >
        <Link 
          to="/" 
          onClick={() => mobile && setIsMobileMenuOpen(false)} 
          className="w-full"
        >
          Home
        </Link>
      </motion.li>

      <li className={`${mobile ? 'mb-3 w-full' : 'relative'}`}>
        <ProductDropdown mobile={mobile} />
      </li>

      

      <motion.li 
        whileHover={{ scale: 1.05 }}
        className={`flex items-center text-xl font-medium text-white hover:text-cyan-400 transition-all duration-300 ${mobile ? 'mb-3 w-full' : ''}`}
      >
        <Link 
          to="/about" 
          onClick={() => mobile && setIsMobileMenuOpen(false)} 
          className="w-full"
        >
          About Us
        </Link>
      </motion.li>
      <motion.li 
        whileHover={{ scale: 1.05 }}
        className={`flex items-center text-xl font-medium text-white hover:text-cyan-400 transition-all duration-300 ${mobile ? 'mb-3 w-full' : ''}`}
      >
        <Link 
          to="/login" 
          onClick={() => mobile && setIsMobileMenuOpen(false)} 
          className="w-full"
        >
          Login
        </Link>
      </motion.li>
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link to="/">
            <motion.img 
              src={headerLogo} 
              alt="Keywave Infotech Logo" 
              className="h-14 w-auto"  
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button 
            onClick={toggleMobileMenu} 
            whileHover={{ rotate: 90 }}
            className="text-2xl text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
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
              <ul className="flex flex-col items-start space-y-4">
                <NavLinks mobile />
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
