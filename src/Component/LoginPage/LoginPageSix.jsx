// LoginPageSix.jsx
import React, { useState } from "react";
import { FaYoutube, FaGoogle, FaFacebook } from "react-icons/fa";

function LoginPageSix() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="font-sans max-w-md mx-auto py-12 px-6 text-center border border-gray-300 rounded-lg bg-white">
      <div className="text-4xl font-bold text-red-600 mb-6">YouTube</div>

      {/* Login or Signup Form */}
      {!isSignup ? (
        <>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Email"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="p-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
            >
              Login
            </button>
          </form>

          <p className="mt-6">
            Don't have an account?{" "}
            <span
              onClick={() => setIsSignup(true)}
              className="text-red-500 cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>
        </>
      ) : (
        <>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="p-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6">
            Already have an account?{" "}
            <span
              onClick={() => setIsSignup(false)}
              className="text-red-500 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </>
      )}

      {/* Login Options */}
      <div className="mt-8 flex justify-center items-center gap-8">
        <div className="flex flex-col items-center text-red-600">
          <FaYoutube size={30} />
          <span>YouTube</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <FaGoogle size={30} />
          <span>Google</span>
        </div>
        <div className="flex flex-col items-center text-blue-600">
          <FaFacebook size={30} />
          <span>Facebook</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPageSix;
