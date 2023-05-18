import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import './Login.css'
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const {user} = useContext(AuthContext)
  console.log(user);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target
    const email = form.email.value
    const password = form.password.value
    // email and password validation

    if (!email) {
      setError("Please enter your email.");
    } else if (!password) {
      setError("Please enter your password.");
    } 
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
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
          <div className="mb-6">
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
          <div className="flex items-center justify-between mb-6">
            <a href="#" className="text-[#ff8008] hover:underline">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="btn-grad"
              style={{ padding: "12px 28px" }}
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-sm mb-4">
          Or login with Google:
        </p>
        <button className="border rounded-xl px-4 py-2 rounded-md w-full mb-4 hover:bg-slate-100 hover:scale-95 hover:transition-all">
          <FcGoogle className="inline-block mx-2 h-6 w-auto" />
          Sign in with Google
        </button>
        <p className="text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <Link to="/registration" className="text-[#ff8008] hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
