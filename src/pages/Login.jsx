import React, { useState } from "react";
import { BiLock } from "react-icons/bi";
import { BsGoogle, BsMailbox } from "react-icons/bs";
import LoginBanner from "../assets/banners/Computer login-pana.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", email);
  };

  return (
    <div className="flex min-h-screen bg-[#FFEDD5]">
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#111827]">
        <img
          src={LoginBanner}
          alt="Login Banner"
          className="w-3/4 h-auto object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#111827]">
            Welcome Back
          </h2>
          <p className="text-center text-[#111827] mb-8">Log in to continue</p>

          <button className="w-full flex items-center justify-center bg-orange-500 text-white rounded-lg p-3 mb-6 hover:bg-orange-600 transition duration-300">
            <BsGoogle className="mr-3" />
            Continue with Google
          </button>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <BsMailbox className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg bg-[#F9FAFB] text-[#111827] focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
                required
              />
            </div>

            <div className="relative">
              <BiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg bg-[#F9FAFB] text-[#111827] focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
                required
              />
            </div>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-[#111827] hover:underline text-sm"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Log In
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-800">
              Don't have an account?{" "}
              <Link to="/signup" className="text-orange-700 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
