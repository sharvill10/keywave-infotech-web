import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.products.map((product, productIndex) => (
                    <ProductCard key={productIndex} product={product} index={productIndex} />
                ))} 
            </div>
        </motion.div>
    );
};

export default ProductCategory;
