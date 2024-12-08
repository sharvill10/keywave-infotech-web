import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  CgChevronRight, 
  CgArrowLeft, 
  CgCreditCard 
} from 'react-icons/cg';
import { 
  FaShippingFast, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaUser 
} from 'react-icons/fa';
import image from '../assets/images/X50B.jpg'

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [cartItems] = useState([
    {
      id: 1,
      name: 'Luxury Chronograph Watch',
      price: 599.99,
      quantity: 1,
      image: image
    },
    {
      id: 2,
      name: 'Premium Leather Messenger Bag',
      price: 349.50,
      quantity: 2,
      image: image
    },
    {
      id: 3,
      name: 'Noise-Cancelling Wireless Headphones',
      price: 249.99,
      quantity: 1,
      image: image
    }
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle payment processing
    alert('Order Submitted!');
    navigate('/order-confirmation');
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
            onClick={() => navigate('/cart')}
            className="flex items-center text-orange-400 hover:text-orange-500 transition-colors"
          >
            <CgArrowLeft size={24} className="mr-2" />
            Back to Cart
          </button>
          <div className="flex items-center space-x-3 text-white">
            <CgCreditCard size={28} className="text-orange-400" />
            <h1 className="text-3xl font-bold">Checkout</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Checkout Form Column */}
          <div className="md:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-700">
                Shipping Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className=" mb-2 flex items-center text-gray-300">
                      <FaUser className="mr-3 text-orange-400" size={20} />
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className=" mb-2 flex items-center text-gray-300">
                      <FaUser className="mr-3 text-orange-400" size={20} />
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className=" mb-2 flex items-center text-gray-300">
                      <FaEnvelope className="mr-3 text-orange-400" size={20} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className=" mb-2 flex items-center text-gray-300">
                      <FaPhone className="mr-3 text-orange-400" size={20} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <label className=" mb-2 flex items-center text-gray-300">
                    <FaMapMarkerAlt className="mr-3 text-orange-400" size={20} />
                    Shipping Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-gray-300">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-300">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-700">
                Payment Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className=" mb-2 flex items-center text-gray-300">
                    <CgCreditCard className="mr-3 text-orange-400" size={20} />
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-gray-300">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      placeholder="MM/YY"
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-300">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      placeholder="123"
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Order Summary Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-gray-800 rounded-2xl p-8 h-fit sticky top-12"
          >
            <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-700 flex items-center">
              <FaShippingFast className="mr-4 text-orange-400" size={28} />
              Order Summary
            </h2>
            <div className="space-y-6 mb-8">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-lg" 
                    />
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-gray-400">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="flex justify-between items-center text-gray-300 border-t border-gray-700 pt-4">
                <span>Subtotal</span>
                <span>${calculateTotal()}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="flex justify-between items-center font-bold text-xl border-t border-gray-700 pt-4">
                <span>Total</span>
                <span className="text-orange-400">
                  ${calculateTotal()}
                </span>
              </div>
            </div>
            <button 
              onClick={handleSubmit}
              className="w-full bg-orange-500 text-white py-4 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center text-lg"
            >
              Complete Order
              <CgChevronRight className="ml-3" size={24} />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;