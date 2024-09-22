import React from 'react';
import ShinhoA3 from '../assets/products/Shinho-A3.png';
import ShinhoX700 from '../assets/products/Shinho-X-700.png';
import X80E from '../assets/products/X-80E.png';

const products = [
  {
    name: 'Shinho A3 Handheld FTTX Fiber Optical Fusion Splicer',
    image: ShinhoA3,
    description: 'Customization: Available\nType: Fiber Fusion Splicer\nWiring Devices: MDF',
  },
  {
    name: 'Shinho X-700 Smart Handheld Multi-Function Fiber Optic Splicer Fusion Splicer',
    image: ShinhoX700,
    description: 'Customization: Available\nType: Fiber Fusion Splicer\nWiring Devices: MDF',
  },
  {
    name: 'Shinho X Series Fusion Splicer for FTTH/FTTX Trunk Fiber Line Projects with High Quality and Long Time Use',
    image: X80E,
    description: 'Customization: Available\nCertification: CE, ISO, RoHS\nCondition: New',
  },

];

const Products = () => {
  return (
    <section className="bg-orange-50 py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-orange-600 font-bold mb-12">
          Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 whitespace-pre-line">{product.description}</p>
              
              <button 
                className="mt-4 w-full py-2 bg-orange-600 text-white font-bold rounded hover:bg-orange-700 transition-colors duration-300"
                
              >
                Enquiry
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;