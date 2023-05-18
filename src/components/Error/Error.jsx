import React from 'react';
import warning from "../../../public/warning.png";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-4">
          Oops! The page you are looking for could not be found.
        </p>
        <img
          src={warning}
          alt="404 Error"
          className="w-64 mx-auto mb-4"
        />
        <Link
          to="/"
          className="text-[#ff8008] hover:text-[#ff8008] font-medium text-lg underline"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
