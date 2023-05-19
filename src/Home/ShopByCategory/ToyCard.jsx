import React from "react";
import takaSign from "../../../public/taka.png";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id,  pictureUrl, productName, price, rating } = toy;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={pictureUrl}
        alt={productName}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-lg font-semibold">{productName}</h3>
      <p className="text-gray-600 mt-2 flex items-center">
        <img className="w-4 h-4 inline" src={takaSign} alt="" />
        {price}
      </p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">{rating}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-500 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 0l6 18H4l6-18zm0 0l-6 18h12l-6-18zm-1.239 8.048l-.588-1.813L5 7.397l1.94-1.412L8.333 3l.555 1.985L10 7l1.112-1.015L13.06 3l1.392 2.985L15 7.397l-2.173.838-.588 1.813L10 8.476zM10 15.313l-3.531 2.156 1.032-3.563L3.75 9.876l3.625-.282L10 6l1.625 3.594 3.625.282-2.75 2.031 1.032 3.563L10 15.312z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <Link to={`/toysDetails/${_id}`}><button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
        View Details
      </button></Link>
    </div>
  );
};

export default ToyCard;
