import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [error, setError] = useState("");
  const { user, login, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // change title
  useEffect(() => {
    document.title = "TechToy | Login";
  }, []);

  // handle login button
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // email and password validation
    if (!email) {
      setError("Please enter your email.");
    } else if (!password) {
      setError("Please enter your password.");
    }
    // call the firebase login
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast("Successfully Login!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        form.reset();
        navigate(from);
      })
      .catch((error) => setError(error.message));
  };

  // handle google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast("Successfully Login!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(from);
      })
      .catch((error) => setError(error.message));
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
            <div>
              <button
                type="submit"
                className="btn-grad"
                style={{ padding: "12px 28px" }}
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <p className="text-center text-gray-500 text-sm mb-4">
          Or login with Google:
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="border px-4 py-2 rounded-md w-full mb-4 hover:bg-slate-100 hover:scale-95 hover:transition-all"
        >
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
