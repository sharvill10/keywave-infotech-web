import React, { useState } from "react";
import { BiLock } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { Link } from "react-router-dom";
import SignUpBanner from "../assets/banners/Prototyping process-pana.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    console.log("Sign Up attempted with:", email);
  };

  return (
    <div className="flex min-h-screen bg-[#FFEDD5]">
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#111827]">
        <img
          src={SignUpBanner}
          alt="Sign Up Banner"
          className="w-3/4 h-auto object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#111827]">
            Create an Account
          </h2>
          <p className="text-center text-[#111827] mb-8">
            Sign up to get started
          </p>

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

            <div className="relative">
              <BiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg bg-[#F9FAFB] text-[#111827] focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-800">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-700 hover:underline">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
