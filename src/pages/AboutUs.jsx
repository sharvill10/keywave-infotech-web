import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiTarget, FiTrendingUp } from 'react-icons/fi';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 min-h-screen">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-16 max-w-6xl"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl font-extrabold text-center text-white mb-16 tracking-tight"
        >
          KEYWAVE INFOTECH
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <FiTarget className="text-blue-500 text-4xl mr-4" />
              <h2 className="text-3xl font-bold text-blue-400">Our Mission</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Keywave Infotech specializes in providing top-quality sales and service for optical fiber and telecommunications equipment. We support telecom, cable, and internet service providers with advanced technological solutions that enhance network performance and reliability.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <FiTrendingUp className="text-blue-500 text-4xl mr-4" />
              <h2 className="text-3xl font-bold text-blue-400">Our Approach</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              {[
                "Cutting-edge technological solutions",
                "Customer-focused service",
                "Reliable and efficient equipment",
                "Continuous innovation and support"
              ].map((value, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 mr-3 rounded-full"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-gray-800 rounded-2xl p-8 mb-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
            Our Partner: SHINHO
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-gray-300">
              <p className="leading-relaxed mb-4">
                SHINHO is a leading manufacturer of fiber optic equipment, bringing over 15 years of experience in developing advanced fusion splicer technologies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FiAward className="mr-3 text-blue-500" />
                  ISO9001:2015 Certified
                </li>
                <li className="flex items-center">
                  <FiUsers className="mr-3 text-blue-500" />
                  Global presence in 50+ countries
                </li>
              </ul>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-lg text-gray-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Key Achievements
              </h3>
              <ul className="space-y-2">
                <li>Over 10,000 machines produced annually</li>
                <li>24-month product warranty</li>
                <li>Continuous technological improvement</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300 text-center">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-blue-400">Get in Touch</h3>
              <p>Email: keywaveinfotech@gmail.com</p>
              <p>Phone: +91 9702233455 / +91 9769449716</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                Our Location
              </h3>
              <p>
                S154, 2nd Floor, Fantasia Business Park,
                Sector-30/A, Vashi, Navi Mumbai – 400703
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;