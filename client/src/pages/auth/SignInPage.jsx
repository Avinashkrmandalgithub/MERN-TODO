import React from 'react';
import { FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-200 via-purple-200 to-green-200 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Welcome Back
          </h1>
          <p className="text-gray-600 mt-2">Sign in to continue to your todos</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Sign In Button */}
          <div>
            <button
              type="submit"
              className="relative w-full flex justify-center items-center gap-2 py-3 px-4 font-semibold text-white rounded-lg shadow-md 
                         bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 
                         bg-[length:200%_200%] bg-[position:100%_0] 
                         hover:bg-[position:0_0] transition-all duration-500 ease-out"
            >
              <FaArrowRight />
              Sign In
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="font-semibold text-orange-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
