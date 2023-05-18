import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;
    let errorMessage = "";

    if (!name) {
      errorMessage = "Please enter your name.";
    } else if (!email) {
      errorMessage = "Please enter your email.";
    } else if (!password) {
      errorMessage = "Please enter your password.";
    } else {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorMessage = "Please enter a valid email address.";
      }

      // Password validation
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
      if (!passwordRegex.test(password)) {
        errorMessage =
          "Password should be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one number.";
      }
    }

    setError(errorMessage);

    if (!errorMessage) {
      // Continue with registration process
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Registration</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleRegistration}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#ffc837]"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#ffc837]"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#ffc837]"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block text-gray-700 font-medium mb-2"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photo"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#ffc837]"
              placeholder="Enter your photo URL"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="btn-grad"
              style={{ padding: "12px 28px" }}
            >
              Register
            </button>
            <p className="text-center text-gray-500 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-[#ff8008] hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
