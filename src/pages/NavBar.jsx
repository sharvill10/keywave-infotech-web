import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/images/Keywave Infotech - Color Logo White Text.png';
import { FaBoxOpen, FaCut, FaSitemap, FaTools, FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';
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

  const NavLinks = ({ mobile = false }) => (
    <>
      <motion.li 
        whileHover={{ scale: 1.05 }} 
        className={`flex items-center text-xl font-bold text-white hover:text-orange-600 transition-colors duration-300 ${mobile ? 'mb-4' : ''}`}
      >
        <Link to="/" onClick={() => mobile && setIsMobileMenuOpen(false)}>Home</Link>
      </motion.li>

      <li className={`relative ${mobile ? 'mb-4' : ''}`} ref={dropdownRef}>
        <motion.button
          onClick={toggleDropdown}
          whileHover={{ scale: 1.05 }}
          className="flex items-center text-xl font-bold text-white hover:text-orange-600 transition-colors duration-300"
        >
          Product
          {isDropdownOpen ? (
            <motion.div 
              animate={{ rotate: 180 }} 
              transition={{ duration: 0.2 }}
            >
              <FaChevronUp className="ml-1 text-xl" />
            </motion.div>
          ) : (
            <motion.div 
              animate={{ rotate: 0 }} 
              transition={{ duration: 0.2 }}
            >
              <FaChevronDown className="ml-1 text-xl" />
            </motion.div>
          )}
        </motion.button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              className={`${mobile ? 'relative' : 'absolute'} top-full right-0 mt-2 bg-white shadow-xl rounded-lg ${mobile ? 'w-full' : 'w-[800px]'} p-6 z-10`}
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.3 }}
            >
              <div className={`grid ${mobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
              <Link to="/products" className="flex flex-col p-4 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-black hover:text-orange-600">
                        <div className='flex items-center mb-2'>
                          <FaSitemap className="text-3xl text-orange-500 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-800">Splicers</h3>
                        </div>
                        <p className="text-sm text-gray-600">Fusion splicer equipment</p>
                      </Link>

                      {/* <Link to="/products" className="flex flex-col p-4 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-black hover:text-orange-600">
                        <div className='flex items-center mb-2'>
                          <FaCut className="text-3xl text-orange-500 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-800">Stripper</h3>
                        </div>
                        <p className="text-sm text-gray-600">Fiber optic stripping tools</p>
                      </Link> */}

                      <Link to="/products" className="flex flex-col p-4 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-black hover:text-orange-600">
                        <div className='flex items-center mb-2'>
                          <FaCut className="text-3xl text-orange-500 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-800">Cleaver</h3>
                        </div>
                        <p className="text-sm text-gray-600">Precision fiber cleaving tools</p>
                      </Link>

                      {/* <Link to="/products" className="flex flex-col p-4 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-black hover:text-orange-600">
                        <div className='flex items-center mb-2'>
                          <FaShieldAlt className="text-3xl text-orange-500 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-800">Protection Sleeve</h3>
                        </div>
                        <p className="text-sm text-gray-600">Fiber protection solutions</p>
                      </Link> */}

                      <Link to="/products" className="flex flex-col p-4 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-black hover:text-orange-600">
                        <div className='flex items-center mb-2'>
                          <FaTools className="text-3xl text-orange-500 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-800">Accessories</h3>
                        </div>
                        <p className="text-sm text-gray-600">Additional fiber optic tools</p>
                      </Link>

                      <Link to="/products" className="flex flex-col p-4 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-black hover:text-orange-600">
                        <div className='flex items-center mb-2'>
                          <FaBoxOpen className="text-3xl text-orange-500 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-800">Starter Kit</h3>
                        </div>
                        <p className="text-sm text-gray-600">Complete set for beginners</p>
                      </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>

      <motion.li 
        whileHover={{ scale: 1.05 }}
        className={`flex items-center text-xl font-bold text-white hover:text-orange-600 transition-colors duration-300 ${mobile ? 'mb-4' : ''}`}
      >
        <Link to="/about" onClick={() => mobile && setIsMobileMenuOpen(false)}>About Us</Link>
      </motion.li>
    </>
  );

  return (
    <nav className="bg-gray-900 text-black h-20 p-8 shadow-md">
  <div className="container mx-auto flex items-center justify-between h-full">
    <div className="flex items-center">
      <Link to="/">
        <motion.img 
          src={headerLogo} 
          alt="Logo" 
          className="h-16"  
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }}
        />
      </Link>
    </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex items-center space-x-10">
      <NavLinks />
    </ul>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button onClick={toggleMobileMenu} className="text-2xl text-white">
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white"
      >
        <ul className="flex flex-col items-start p-4">
          <NavLinks mobile />
        </ul>
      </motion.div>
    )}
  </AnimatePresence>
</nav>

  );
};

export default Navbar;
