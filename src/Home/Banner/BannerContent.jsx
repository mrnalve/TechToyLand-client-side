import React from 'react';

const BannerContent = () => {
    return (
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#000000] to-[rgba(230,230,230, 0.8)]  flex">
          <div className="flex flex-col justify-center w-full md:w-2/5 ml-5 md:ml-20">
            <h2 className="text-4xl text-white font-bold mb-4">
              Welcome to our Electronics Toy Shop
            </h2>
            <p className="text-white text-lg mb-6">
              We offer a wide range of electronic toys for kids, including
              drones, cameras, and more. Explore our collection and find the
              perfect toy for your little one!
            </p>
            <button className="btn-grad rounded ml-0">
              Shop Now
            </button>
          </div>
        </div>
    );
};

export default BannerContent;