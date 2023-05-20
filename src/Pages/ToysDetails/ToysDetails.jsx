import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const ToysDetails = () => {
  const toys = useLoaderData();
  const {
    pictureUrl,
    productName,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = toys[0];
  
  // change title
  useEffect(() => {
    document.title = "TechToy | ToysDetails";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mb-4">
          <img src={pictureUrl} alt={productName} className="rounded-lg" />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h2 className="text-2xl font-bold mb-2">{productName}</h2>
          <p className="text-gray-500 mb-2">Seller: {sellerName}</p>
          <p className="text-gray-500 mb-4">Email: {sellerEmail}</p>
          <p className="text-lg font-semibold mb-2">Price: {price}</p>
          <p className="text-lg font-semibold mb-2">Rating: {rating}</p>
          <p className="text-lg font-semibold mb-2">Available Quantity: {quantity}</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Description</h3>
        <p>{description}</p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ToysDetails;
