import React from 'react';
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-200 via-rose-200 to-cyan-200 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/40 backdrop-blur-md rounded-2xl shadow-lg">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">
            Create Account
          </h1>
          <p className="mt-2 text-gray-600">Join us and start organizing your life</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="text-sm font-medium text-gray-700">Username</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="w-5 h-5 text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaEnvelope className="w-5 h-5 text-gray-400" />
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="w-5 h-5 text-gray-400" />
              </span>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="relative w-full flex justify-center items-center gap-2 py-3 px-4 text-white font-semibold rounded-lg shadow-md 
                         bg-gradient-to-r from-orange-400 via-teal-400 to-purple-500 
                         bg-[length:200%_200%] bg-[position:100%_0] 
                         hover:bg-[position:0_0] transition-all duration-500 ease-out"
            >
              <FaUserPlus />
              Create Account
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="font-semibold text-orange-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
