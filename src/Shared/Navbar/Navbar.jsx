import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const list = (
    <>
      <li>
        <Link className="navbarItems" to={'/'}>Home</Link>
      </li>
      <li>
        <Link className="navbarItems" to={''}>All Toys</Link>
      </li>
      <li>
        <Link className="navbarItems" to={''}>Blog</Link>
      </li>
      <li>
        <Link className="navbarItems" to={''}>Add A Toy</Link>
      </li>
      <li>
        <Link className="navbarItems" to={''}>My Toys</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {list}
          </ul>
        </div>
        <div className="flex items-center gap-0 m-0 p-0">
          <a className="md:text-3xl text-xl font-extrabold text-amber-600 w-full ">TechToyLand</a>
          <img
            className="md:h-16 md:w-28 w-16 h-10"
            src="https://i.ibb.co/yyCJKrz/Tech-Toys-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>
      <div className="navbar-end">
        <Link to={'/login'}><button className="btn-grad">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
