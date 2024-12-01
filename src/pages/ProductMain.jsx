import React from "react";
import { motion } from "framer-motion";


import ProductCategory from "../components/ProductCategory";
import {productCategories} from '../product.jsx'



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
