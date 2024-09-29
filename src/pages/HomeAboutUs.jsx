import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiCalendar, FiUsers, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HomeAboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-gray-100 py-5 md:py-10">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-2xl md:text-3xl font-bold text-center text-orange-600 mb-8 md:mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-4 md:mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We empower Telecom, MSO, CATV, and ISP operators in India with innovative solutions focused on quality, price, and services.
            </p>
            <p className="text-gray-700">
              Our commitment ensures exceptional customer experiences and continuous improvement.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-4 md:mb-6">Company Overview</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FiCalendar className="text-orange-500 mr-3 flex-shrink-0" />
                <span>Founded in March 2024</span>
              </li>
              <li className="flex items-center">
                <FiMapPin className="text-orange-500 mr-3 flex-shrink-0" />
                <span>Headquartered in Vashi, Navi Mumbai</span>
              </li>
              <li className="flex items-center">
                <FiUsers className="text-orange-500 mr-3 flex-shrink-0" />
                <span>Led by Mr. Prashant Shetty and Mr. Ravikant Sharma</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="mt-10 md:mt-12 bg-orange-600 text-white p-6 md:p-8 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <FiMail className="mr-3 flex-shrink-0" />
                <a href="mailto:keywaveinfotech@gmail.com" className="hover:underline">keywaveinfotech@gmail.com</a>
              </div>
              <div className="flex items-center">
                <FiPhone className="mr-3 flex-shrink-0" />
                <p>+91 9702233455 / +91 9769449716</p>
              </div>
            </div>
            <div className="flex items-start">
              <FiMapPin className="mr-3 mt-1 flex-shrink-0" />
              <p>
                S154, 2nd Floor, Fantasia Business Park,<br />
                Vashi, Navi Mumbai – 400703.
              </p>
            </div>
          </div>
        </motion.div>

        {/* More About Us Button as a card */}
        <div className="mt-8 text-center">
          <Link 
            to="/about" 
            className="flex items-center justify-center bg-white text-orange-600 py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <FiArrowRight className="mr-2" />
            <span className="font-semibold">More About Us</span>
          </Link>
        </div>

        {/* Copyright Notice */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Keywave Infotech. All Rights Reserved.</p>
          <p className="mt-2">Follow us on social media for the latest updates.</p>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
