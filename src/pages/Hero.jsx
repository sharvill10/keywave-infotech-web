import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import herobg from '../assets/images/Hero-bg.jpg';
import herobg1 from '../assets/banners/5202423.jpg';
import herobg2 from '../assets/banners/2817291.jpg';
import herobg3 from '../assets/banners/7291978.jpg';

const slides = [
  {
    title: "Empowering Telecom Solutions",
    description: "Innovative technology driving telecom infrastructure with cutting-edge equipment and strategic partnerships.",
    image: herobg,
    gradient: "from-[#111827] to-gray-900/40",
    accent: "bg-gray-700/50"
  },
  {
    title: "Precision Fiber Optics",
    description: "Advanced fiber optic solutions providing unparalleled connectivity and performance for modern networks.",
    image: herobg1,
    gradient: "from-[#111827] to-gray-900/40",
    accent: "bg-gray-700/50"
  },
  {
    title: "Sustainable Technology",
    description: "Committed to eco-friendly solutions that minimize environmental impact while maximizing technological efficiency.",
    image: herobg2,
    gradient: "from-[#111827] to-gray-900/40",
    accent: "bg-gray-700/50"
  },
  {
    title: "Expert Technical Support",
    description: "15+ years of industry expertise delivering rapid, comprehensive support and innovative technological solutions.",
    image: herobg3,
    gradient: "from-[#111827] to-gray-900/40",
    accent: "bg-gray-700/50"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111827]">
      {/* Gradient Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} backdrop-blur-xl`}
        />
      </AnimatePresence>

      {/* Subtle Overlay Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-transparent to-transparent"></div>

      <div className="relative z-10 min-h-screen flex items-center container mx-auto px-6 py-6">
        {/* Navigation - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block absolute inset-y-0 left-0 z-20  items-center">
          <motion.button
            onClick={prevSlide}
            className="bg-gray-800/20 hover:bg-gray-800/30 backdrop-blur-sm p-3 rounded-full ml-4 border border-gray-800/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BiChevronLeft className="text-gray-300 w-8 h-8" />
          </motion.button>
        </div>
        
        <div className="hidden md:block absolute inset-y-0 right-0 z-20 items-center">
          <motion.button
            onClick={nextSlide}
            className="bg-gray-800/20 hover:bg-gray-800/30 backdrop-blur-sm p-3 rounded-full mr-4 border border-gray-800/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BiChevronRight className="text-gray-300 w-8 h-8" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
          {/* Content Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-gray-200"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-400 leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className={`group flex items-center space-x-3 ${slides[currentSlide].accent} text-gray-200 px-6 py-3 rounded-full font-semibold hover:brightness-125 transition`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* Image Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="absolute -inset-6 bg-gray-800/10 rounded-2xl -rotate-6 blur-md group-hover:rotate-0 transition-all duration-500"></div>
              <motion.img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="relative z-10 rounded-2xl shadow-2xl object-cover w-full aspect-video group-hover:scale-[1.02] transition-transform duration-500"
                initial={{ rotate: -3 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                currentSlide === index 
                  ? 'bg-orange-600/70' 
                  : 'bg-orange-800/40 hover:bg-orange-800/50'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;