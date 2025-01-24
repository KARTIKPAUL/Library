import React, { useState } from "react";
import { FaInstagram, FaGoogle, FaFacebook, FaEnvelope } from "react-icons/fa";

function LoginPageTwo() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Left Section: Full-Screen Image */}
      <div className="hidden md:block w-1/2">
        <img
          src="https://img.freepik.com/free-photo/superfood-background-with-green-vegetables_53876-106104.jpg"
          alt="Vegetables"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section: Login/Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md px-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              {isLogin ? "Hello, Welcome Back" : "Join Us"}
            </h1>
            <p className="text-gray-500 mt-2">
              {isLogin
                ? "Login to manage your account"
                : "Sign up to get started with us"}
            </p>
          </div>

          <form className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Please Enter Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            )}
            <input
              type="email"
              placeholder="Please Enter Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Please Enter Your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Your Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            )}
            {isLogin && (
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Your Password?
                </a>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <span className="w-full border-t border-gray-300"></span>
            <span className="px-4 text-gray-500">or</span>
            <span className="w-full border-t border-gray-300"></span>
          </div>

          {/* Social Media Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
              <FaGoogle className="text-gray-600" />
            </button>
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
              <FaFacebook className="text-blue-600" />
            </button>
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
              <FaInstagram className="text-pink-500" />
            </button>
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
              <FaEnvelope className="text-gray-600" />
            </button>
          </div>

          {/* Toggle Login/Signup */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 hover:underline"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPageTwo;
