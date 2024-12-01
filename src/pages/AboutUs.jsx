import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiCalendar, FiUsers, FiAward } from 'react-icons/fi';

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-gray-900 text-gray-100 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-center text-orange-500 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          About KEYWAVE INFOTECH
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-orange-500 mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              KEYWAVE INFOTECH is a leading sales and service provider of Optical Fiber Fusion Splicer, OTDR, and other Test & Measurement equipment. We empower Telecom, MSO, CATV, and ISP operators in India with innovative solutions focused on quality, price, and services.
            </p>
            <p className="text-gray-300">
              Our commitment to Compassion, Accountability, Healthy Competition, Personal Growth & Wellness, and Equality ensures exceptional customer experiences and continuous improvement.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold text-orange-500 mb-6">Company Overview</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <FiCalendar className="text-orange-400 mr-3 flex-shrink-0" />
                <span>Founded in March 2024</span>
              </li>
              <li className="flex items-center">
                <FiMapPin className="text-orange-400 mr-3 flex-shrink-0" />
                <span>Headquartered in Vashi, Navi Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center">
                <FiUsers className="text-orange-400 mr-3 flex-shrink-0" />
                <span>Led by Mr. Prashant Shetty and Mr. Ravikant Sharma</span>
              </li>
              <li className="flex items-center">
                <FiAward className="text-orange-400 mr-3 flex-shrink-0" />
                <span>Distributor of SHINHO Fusion Splicers</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-orange-500 mb-6">Our Partner: SHINHO</h2>
          <p className="text-gray-300 mb-4">
            SHINHO is a Chinese company specializing in fiber fusion splicers and optical fiber equipment. With over 15 years of experience, SHINHO is known for:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>Advanced functions and stable performance</li>
            <li>ISO9001:2015 quality management system</li>
            <li>24-month warranty on products</li>
            <li>Selling over 10,000 machines annually to more than 50 countries</li>
            <li>Constant technology upgrades and model improvements</li>
          </ul>
        </motion.div>

        <motion.div 
          className="mt-12 bg-orange-600 text-white p-8 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
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
                S154, 2nd Floor, Plot No.47, Fantasia Business Park,<br />
                Sector-30/A, Vashi, Navi Mumbai – 400703.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;