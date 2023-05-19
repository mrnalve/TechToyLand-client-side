import React from 'react';

const PromotionsSection = () => {
  return (
    <section className="bg-gray-100 py-8 my-8 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold mb-6">Special Promotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Limited Time Offer</h3>
            <p className="text-gray-600 mb-4">Get 10% off on all electronic tech toys! Use code TOYS10 at checkout.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600 mb-4">Enjoy free shipping on all orders of electronic tech toys. No minimum purchase required.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Bundle Deals</h3>
            <p className="text-gray-600 mb-4">Save big with our exclusive bundle deals on electronic tech toys. Limited stock available.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
              View Bundles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
