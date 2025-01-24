import React, { useState } from "react";
import { FaPinterest, FaGoogle, FaFacebook, FaEnvelope } from "react-icons/fa";

function LoginPageFour() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen bg-gray-800 justify-center items-center">
      {/* Card container */}
      <div className="bg-gray-900 flex rounded-lg shadow-xl overflow-hidden w-full max-w-4xl">
        {/* Left Section: Image */}
        <div className="w-1/2 flex justify-center items-center p-4">
          <img
            src="https://img.freepik.com/premium-photo/hooded-hacker-orchestrates-daring-cyber-attack-cyber-security-with-digital-waves_226666-119.jpg"
            alt="Cybersecurity Image"
            className="w-3/4 h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Section: Login/Signup Form */}
        <div className="w-1/2 bg-gray-800 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-white">
                {isLogin ? "Hello, Welcome Back" : "Join Us"}
              </h1>
              <p className="text-gray-400 mt-2">
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
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-700 text-white"
                />
              )}
              <input
                type="email"
                placeholder="Please Enter Your Email"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-700 text-white"
              />
              <input
                type="password"
                placeholder="Please Enter Your Password"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-700 text-white"
              />
              {!isLogin && (
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-700 text-white"
                />
              )}
              {isLogin && (
                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm text-blue-400 hover:underline"
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
              <span className="w-full border-t border-gray-600"></span>
              <span className="px-4 text-gray-500">or</span>
              <span className="w-full border-t border-gray-600"></span>
            </div>

            {/* Social Media Buttons */}
            <div className="flex justify-center space-x-4">
              <button className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                <FaGoogle className="text-gray-500" />
              </button>
              <button className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                <FaFacebook className="text-blue-600" />
              </button>
              <button className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                <FaPinterest className="text-red-600" />
              </button>
              <button className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                <FaEnvelope className="text-gray-500" />
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
    </div>
  );
}

export default LoginPageFour;
