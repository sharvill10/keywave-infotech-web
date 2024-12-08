import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CgShoppingCart, 
  CgTrash, 
  CgChevronRight, 
  CgArrowLeft 
} from 'react-icons/cg';
import { 
  FaShoppingBag, 
  FaTags, 
  FaShippingFast
} from 'react-icons/fa';

import image from '../assets/images/X50B.jpg'

const Cart = () => {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Luxury Chronograph Watch',
      price: 599.99,
      quantity: 1,
      image: image,
      shortDescription: 'Swiss-made precision timepiece with sapphire crystal',
      category: 'Luxury Watches',
      brand: 'EliteTime',
      color: 'Silver/Black'
    },
    {
      id: 2,
      name: 'Premium Leather Messenger Bag',
      price: 349.50,
      quantity: 2,
      image: image,
      shortDescription: 'Handcrafted Italian leather professional bag',
      category: 'Professional Accessories',
      brand: 'Meridian Leather',
      color: 'Dark Brown'
    },
    {
      id: 3,
      name: 'Noise-Cancelling Wireless Headphones',
      price: 249.99,
      quantity: 1,
      image: image,
      shortDescription: 'Advanced over-ear headphones with 40-hour battery life',
      category: 'Audio Electronics',
      brand: 'SoundMaster',
      color: 'Matte Black'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  

  return (
    <div className="min-h-screen bg-[#111827] text-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <button 
            
            className="flex items-center text-orange-400 hover:text-orange-500 transition-colors"
          >
            <CgArrowLeft size={24} className="mr-2" />
            Continue Shopping
          </button>
          <div className="flex items-center space-x-3 text-white">
            <CgShoppingCart size={28} className="text-orange-400" />
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-16 bg-gray-800 rounded-2xl"
          >
            <FaShoppingBag size={84} className="mx-auto text-orange-400 mb-8" />
            <p className="text-2xl text-gray-300 mb-8">Your cart is empty</p>
            <button 
             
              className="bg-orange-500 text-white px-10 py-4 rounded-full hover:bg-orange-600 transition-colors flex items-center mx-auto"
            >
              Explore Products
              <CgChevronRight size={24} className="ml-2" />
            </button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-3 gap-12">
            {/* Cart Items Column */}
            <div className="md:col-span-2 space-y-8">
              <AnimatePresence>
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      delay: index * 0.1 
                    }}
                    className="bg-gray-800 rounded-2xl overflow-hidden"
                  >
                    <div className="p-6 flex items-center space-x-8">
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-36 h-36 object-cover rounded-xl" 
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{item.name}</h3>
                            <p className="text-sm text-gray-400 flex items-center mb-2">
                              <FaTags className="mr-2 text-orange-400" size={16} />
                              {item.category}
                            </p>
                            <div className="text-sm text-gray-300 space-y-1">
                              <p>Brand: {item.brand}</p>
                              <p>Color: {item.color}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-orange-400 text-2xl">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 bg-gray-700 rounded-full p-1">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-gray-800 text-white shadow-sm w-10 h-10 rounded-full flex items-center justify-center"
                            >
                              -
                            </button>
                            <span className="font-bold text-lg">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-gray-800 text-white shadow-sm w-10 h-10 rounded-full flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-red-400 hover:bg-red-900/20 p-3 rounded-full transition-colors"
                          >
                            <CgTrash size={24} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-gray-800 rounded-2xl p-8 h-fit sticky top-12"
            >
              <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-700 flex items-center">
                <CgShoppingCart className="mr-4 text-orange-400" size={28} />
                Order Summary
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center text-gray-300">
                  <div className="flex items-center">
                    <FaTags className="mr-3 text-orange-400" size={20} />
                    <span>Subtotal</span>
                  </div>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <div className="flex items-center">
                    <FaShippingFast className="mr-3 text-orange-400" size={20} />
                    <span>Shipping</span>
                  </div>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="flex justify-between items-center font-bold text-xl border-t border-gray-700 pt-4">
                  <span>Total</span>
                  <span className="text-orange-400">
                    ${calculateTotal()}
                  </span>
                </div>
              </div>
              <Link to="/checkout">
              <button 
              
                className="w-full bg-orange-500 text-white py-4 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center text-lg"
              >
                Proceed to Checkout
                <CgChevronRight className="ml-3" size={24} />
              </button>
              </Link>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;