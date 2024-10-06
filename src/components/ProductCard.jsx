import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";

const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();
  const handleProductClick = (product) => {
    navigate(`/products/${product.name}`, { state: { product } });
  };

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={() => handleProductClick(product)}
    >
      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold flex items-center">
            <CgShoppingCart size={16} className="mr-2" />
            View Details
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.shortDescription}</p>
     
      </div>
    </motion.div>
  );
};

export default ProductCard;
