import React from 'react';
// import { FaBolt, FaCut, FaRuler, FaShieldAlt, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Assume these imports are working
import ShinhoA3 from '../assets/products/Shinho-A3.png';
import ShinhoX700 from '../assets/products/Shinho-X-700.png';
import X80E from '../assets/products/X-80E.png';
import Cleaver1 from '../assets/images/Fiber Cleaver X50F.png';
import Cleaver2 from '../assets/images/LDC-100 Large Diameter Optical Fiber Cleaver.jpg';
import Cleaver3  from '../assets/images/SFC-10 Ultrasonic Fiber Cleaver.jpg';
import Otdr from '../assets/images/OTDR1.jpg';
import Otdr2 from '../assets/images/OTDR2.jpg';
import Otdr3 from '../assets/images/OTDR3.jpg';
import SplicingToolKit from '../assets/images/Fiber Optic Fusion Splicing Tool Kit X20A.jpg';
import Stripper from '../assets/images/Three Holes Fiber Stripper.jpg' ;
import Protector from '../assets/images/Optic Fiber Shrinkable Protection Sleeve.jpg'



const productCategories = [
  {
    category: 'Fiber Fusion Splicer',
    
    products: [
        { name: 'Shinho A3 Handheld FTTX Fiber Optical Fusion Splicer', image: ShinhoA3 },
        { name: 'Shinho X700 Multi-Function Automatic Fiber Fusion Splicer', image: ShinhoX700 },
        { name: 'Shinho X800 Multi-Function Automatic Fiber Fusion Splicer', image: X80E },
      ],
  },
  
  {
    category: 'Fiber Cleaver',
    
    products: [
      { name: 'High Precision Fiber Cleaver X50F for PM Fiber', image: Cleaver1 },
      { name: 'LDC-100 Large Diameter Optical Fiber Cleaver', image: Cleaver2 },
      {name: 'SFC-10 Ultrasonic Fiber Cleaver', image:Cleaver3 }
    ],
  },
  {
    category: 'OTDR',
    
    products: [
      { name: 'Minini OTDR SHINHO X-1100', image: Otdr },
      { name: 'Handheld Singlemode Multimode OTDR X60', image: Otdr2 },
      { name: 'Mini OTDR Optical Time Domain Reflectometer X30', image: Otdr3 },
    ],
  },
  
  {
    category: 'Fiber Optic Tools',
   
    products: [
      { name: 'Fiber Optic Fusion Splicing Tool Kit X20A', image: SplicingToolKit },
      { name: 'Three Holes Fiber Stripper (250um/900um/3.0mm)', image: Stripper },
      { name: 'Optic Fiber Shrinkable Protection Sleeve', image: Protector },
    ],
  },
];

const ProductCard = ({ product, index }) => (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
      </div>
    </motion.div>
  );
  
  const ProductCategory = ({ category, index }) => {
    return (
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div className="flex items-left justify-left mb-8">
          <motion.h2 
            className="text-3xl font-bold text-left text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          >
            {category.category}
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {category.products.map((product, productIndex) => (
            <ProductCard key={productIndex} product={product} index={productIndex} />
          ))} 
        </div>
      </motion.div>
    );
  };
  
  const ProductMain = () => {
    return (
      <section className="bg-gradient-to-br from-gray-50 to-orange-50 py-4">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl font-extrabold text-center text-gray-900 mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-orange-600">Products</span>
          </motion.h1>
          <div className="space-y-20">
            {productCategories.map((category, index) => (
              <ProductCategory key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductMain;