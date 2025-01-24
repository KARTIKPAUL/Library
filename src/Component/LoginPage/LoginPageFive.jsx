import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

function LoginPageFive() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-900 to-purple-900 flex justify-center items-center">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 via-purple-900 to-black opacity-80"></div>

      {/* Floating Login Card */}
      <div className="relative bg-gray-900 bg-opacity-75 p-8 rounded-3xl shadow-2xl w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          {isLogin ? "Welcome Back!" : "Join Us"}
        </h1>
        <p className="text-center text-gray-400 mt-3">
          {isLogin ? "Login to your account" : "Create an account to get started"}
        </p>

        {/* Form */}
        <form className="space-y-6 mt-6">
          {!isLogin && (
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-6 py-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-white bg-gray-800 placeholder-gray-500"
            />
          )}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-6 py-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-white bg-gray-800 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-6 py-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-white bg-gray-800 placeholder-gray-500"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-6 py-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-white bg-gray-800 placeholder-gray-500"
            />
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        {/* Social Media Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-all">
            <FaFacebook className="text-blue-600" />
          </button>
          <button className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-all">
            <FaGoogle className="text-red-600" />
          </button>
          <button className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-all">
            <FaTwitter className="text-blue-400" />
          </button>
        </div>

        {/* Toggle Login/Signup */}
        <div className="mt-6 text-center text-gray-400">
          <p>
            {isLogin
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:underline"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPageFive;
