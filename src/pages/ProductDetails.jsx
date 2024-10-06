import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaShieldAlt, FaTruck, FaCheckCircle, FaArrowLeft, FaExclamationCircle, FaChevronRight } from 'react-icons/fa';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex min-h-[400px] items-center justify-center p-4"
      >
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <FaExclamationCircle className="text-red-500 text-2xl" />
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-gray-900">No Product Found</p>
              <p className="text-gray-600">The product details you're looking for are not available.</p>
            </div>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              <FaArrowLeft className="mr-2" /> Go Back
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  const images = [product.image, ...Array(3).fill(product.image)]; // Simulated multiple images

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-8xl mx-auto"
        >
          {/* Breadcrumb */}
          <motion.nav {...fadeIn} className="flex items-center space-x-2 mb-8 text-sm">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 bg-white rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <FaArrowLeft className="mr-2" /> Back
            </button>
            <FaChevronRight className="text-gray-400" />
            <span className="text-gray-600">Product Details</span>
          </motion.nav>

          {/* Main Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <motion.div {...fadeIn} className="space-y-6">
              <div className="relative group">
                <div 
                  className={`aspect-square overflow-hidden rounded-3xl bg-white shadow-xl ${
                    isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <motion.img 
                    src={images[activeImage]} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                    initial={false}
                    animate={{
                      scale: isZoomed ? 1.5 : 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                </div>
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10"></div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <motion.button
                    key={idx}
                    className={`relative rounded-2xl overflow-hidden ${
                      activeImage === idx ? 'ring-2 ring-[#FF5C35]' : 'ring-1 ring-black/10'
                    }`}
                    onClick={() => setActiveImage(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="aspect-square">
                      <img 
                        src={img} 
                        alt={`Product view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div {...fadeIn} className="space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#FF5C35]/10 text-[#FF5C35]">
                      New Release
                    </span>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      In Stock
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                    {product.name}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-[#FF5C35] text-white py-4 px-8 rounded-2xl font-semibold shadow-lg shadow-[#FF5C35]/25 hover:shadow-xl hover:shadow-[#FF5C35]/30 transition-all duration-200"
                    >
                      Contact Sales
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gray-100 text-gray-900 py-4 px-8 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-200"
                    >
                      Download Specs
                    </motion.button>
                  </div>
                </div>
              </div>

              
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div className="mt-16" {...fadeIn}>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <FaCheckCircle className="text-[#FF5C35] text-xl flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Specifications Section */}
          <motion.div className="mt-20" {...fadeIn}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
              <p className="text-gray-600">Detailed specifications and performance metrics</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(product.technicalSpecifications).map(([key, value], index) => (
                  <div
                    key={key}
                    className={`p-8 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100 transition-all duration-300`}
                  >
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {formatKey(key)}
                      </h3>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Support and Installation */}
          <motion.div className="mt-20 grid md:grid-cols-2 gap-8" {...fadeIn}>
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-[#FF5C35]/10 rounded-2xl">
                    <FaShieldAlt className="text-[#FF5C35] text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Support & Warranty</h2>
                </div>
                <div className="space-y-6 mt-8">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">24/7 Support</h3>
                    <p className="text-gray-600">{product.afterSalesService?.support}</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Warranty Coverage</h3>
                    <p className="text-gray-600">{product.afterSalesService?.warranty}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-[#FF5C35]/10 rounded-2xl">
                    <FaTruck className="text-[#FF5C35] text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Deployment & Installation</h2>
                </div>
                <div className="space-y-6 mt-8">
                  {product.packaging && Object.entries(product.packaging).map(([key, value]) => (
                    <div key={key} className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">{formatKey(key)}</h3>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;