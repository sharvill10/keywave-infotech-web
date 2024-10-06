import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import HeroBg from '../assets/images/Hero-bg.jpg'; 

const slides = [
  {
    title: "Empowering Telecom Solutions",
    description: "Keywave Infotech drives innovation for Telecom and ISP operators in India with top-tier equipment."
  },
  {
    title: "Quality and Reliability",
    description: "We partner with SHINHO for advanced fiber optic solutions and low splicing loss."
  },
  {
    title: "Committed to Sustainability",
    description: "Our solutions enhance development, aligning with our core values."
  },
  {
    title: "Expert Support and Service",
    description: "15+ years of experience, providing exceptional support and quick feedback."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); 
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
   
    setDirection(currentSlide > 0 ? 1 : -1);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5 } }
  };

  return (
    <motion.div 
      className="bg-gray-900"
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto container px-10 ">
        <div className="flex flex-col md:flex-row min-h-[500px] md:h-[700px] bg-gray-900 text-orange-400 relative">
          <motion.div 
            className="flex-1 flex items-center justify-center relative overflow-hidden py-8 md:py-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="flex flex-col items-start mb-8 w-full flex-shrink-0 mt-7 ">
                  <motion.h1 
                    className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 drop-shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.p 
                    className="text-base md:text-lg lg:text-xl mb-4 max-w-2xl drop-shadow-md"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                  <motion.button
                    className="bg-[#ff5c35] text-white py-2 px-6 md:py-3 md:px-8 rounded-full font-semibold text-sm md:text-base lg:text-lg inline-flex items-center hover:bg-[#e55a31] transition-colors shadow-md"
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Discover Our Solutions
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          {/* <motion.div 
            className="flex-1 relative h-64 md:h-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={HeroBg}
              alt="Fiber fusion splicing machine in action"
              className="w-full h-full object-cover md:rounded-l-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div> */}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-4 pb-4">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-orange-600' : 'bg-gray-300'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
