import React, { useState } from "react";
import { BsMailbox } from "react-icons/bs";
import { Link } from "react-router-dom";
import ForgetPassword from '../assets/banners/Forgot password-pana.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add forgot password logic here
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="flex min-h-screen bg-[#FFEDD5]">
      {" "}
      {/* Light orange background for the whole page */}
      {/* Left Side - Image */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#111827]">
        {" "}
        {/* Keep the dark background on the image section */}
        <img
          src={ForgetPassword} // You can replace with an appropriate image path
          alt="Forgot Password Banner"
          className="w-3/4 h-auto object-contain" // Makes the image smaller and responsive
        />
      </div>
      {/* Right Side - Forgot Password Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#111827]">
            Forgot Your Password?
          </h2>
          <p className="text-center text-[#111827] mb-8">
            Enter your email to reset your password
          </p>

          {/* Forgot Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Reset Password
            </button>
          </form>

          {/* Back to Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-800">
              Remembered your password?{" "}
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

export default ForgotPassword;
