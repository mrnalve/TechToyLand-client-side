import React from "react";
import {
  FaFacebook,
  FaMapMarkerAlt,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaPinterest
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800 rounded-xl">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {/* first part */}
          <div>
            <div className="flex items-center justify-center md:justify-start">
              <p className="md:text-3xl text-xl font-extrabold text-white w-full">
              TechToyLand
              </p>
              <img
                src="https://i.ibb.co/yyCJKrz/Tech-Toys-1.png"
                alt="Your Logo"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-300">
              Discover a world of imagination and learning with our premium
              selection of kid-friendly electronics. Inspire creativity and
              exploration for young minds.
            </p>
          </div>
          {/* second part */}
          <div className="col-span-1 md:col-span-1 text-white">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <ul className="list-unstyled mb-4">
              <li className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2" />
                <span>Dhaka 24, TechToy BD</span>
              </li>
              <li className="flex items-center mb-2">
                <FaPhoneAlt className="mr-2" />
                <span>1-800-555-1234</span>
              </li>
              <li className="flex items-center mb-2">
                <FaEnvelope className="mr-2" />
                <span>Tech@Toy.com</span>
              </li>
            </ul>
          </div>
          {/* third part */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Social Media
            </h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/your-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaPinterest />
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
          {/* last part */}
          <div className="col-span-1 md:col-span-1 text-white">
            <h3 className="text-xl font-bold mb-2">Navigation</h3>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  All Toys
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  My Toys
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* copyright part */}
        <hr className="my-8 border-gray-700" />
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} TechToy Land Shop. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
