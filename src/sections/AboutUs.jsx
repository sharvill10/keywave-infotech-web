import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; // Feather icons

const AboutUs = () => {
  return (
    <section className="bg-orange-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-orange-600 font-bold mb-8">About Us</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Contact Us</h3>
              <div className="flex items-center">
                <FiMail className="h-5 w-5 text-orange-600 mr-3" />
                <p className="text-gray-700">info@keywaveinfotech.com</p>
              </div>
              <div className="flex items-center">
                <FiPhone className="h-5 w-5 text-orange-600 mr-3" />
                <p className="text-gray-700">+91 9702233455 / +91 9769449716</p>
              </div>
              <div className="flex items-start">
                <FiMapPin className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                <p className="text-gray-700">
                  S154, 2nd Floor, Plot No.47, Fantasia Business Park,<br />
                  Sector-30/A, Vashi, Navi Mumbai – 400703.
                </p>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
