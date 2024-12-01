import React from 'react';
import { motion } from 'framer-motion';
import ShinhoA3 from '../assets/products/Shinho-A3.png';
import { Link } from 'react-router-dom';

const productCategories = [
  {
    category: 'Fiber Fusion Splicer',
    image: ShinhoA3,
    products: [
      { name: 'Shinho A3 Handheld FTTX Fiber Optical Fusion Splicer' },
    ],
  },
];

const Products = () => {
  return (
    <section className="bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl text-center text-orange-400 font-bold mb-12 sm:mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Product Categories
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {productCategories.map((category, index) => (
            <Link to="/products" key={index}>
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">{category.category}</h3>
                  <p className="text-sm sm:text-base text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {category.products[0].name}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
