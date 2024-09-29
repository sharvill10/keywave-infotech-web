import React from 'react';
import { motion } from 'framer-motion';
import ShinhoA3 from '../assets/products/Shinho-A3.png';
import Cleaver1 from '../assets/images/Fiber Cleaver X50F.png';
import Otdr from '../assets/images/OTDR1.jpg';
import { Link } from 'react-router-dom';

const productCategories = [
  {
    category: 'Fiber Fusion Splicer',
    image: ShinhoA3,
    products: [
      { name: 'Shinho A3 Handheld FTTX Fiber Optical Fusion Splicer' },
    ],
  },
  {
    category: 'Fiber Cleaver',
    image: Cleaver1,
    products: [
      { name: 'High Precision Fiber Cleaver X50F for PM Fiber' },
    ],
  },
  {
    category: 'OTDR',
    image: Otdr,
    products: [
      { name: 'Minini OTDR SHINHO X-1100' },
    ],
  },
];

const Products = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-orange-100 py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl sm:text-3xl text-center text-orange-600 font-bold mb-8 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Product Categories
        </motion.h2>
        <Link to="/products">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {productCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-2xl"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">{category.category}</h3>
                  <p className="text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {category.products[0].name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Products;
