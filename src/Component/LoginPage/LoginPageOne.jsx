// LoginPageOne.jsx
import React, { useState } from "react";
import { FaInstagram, FaGoogle, FaFacebook, FaEnvelope } from "react-icons/fa";

function LoginPageOne() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="font-sans max-w-sm mx-auto py-12 px-8 text-center border border-gray-300 rounded-lg bg-white">
      <h1 className="text-2xl font-bold mb-6">{isSignup ? "Sign Up" : "Login"}</h1>

      {/* Login or Signup Form */}
      {!isSignup ? (
        <>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Phone number, username or email"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>

          <p className="mt-6">
            Don't have an account?{" "}
            <span
              onClick={() => setIsSignup(true)}
              className="text-blue-500 cursor-pointer hover:underline"
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
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6">
            Already have an account?{" "}
            <span
              onClick={() => setIsSignup(false)}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </>
      )}

      {/* Login Options */}
      <div className="mt-8">
        <div className="flex justify-center items-center gap-4">
          <div className="flex flex-col items-center text-blue-500">
            <FaGoogle size={20} />
            <span>Google</span>
          </div>
          <div className="flex flex-col items-center text-blue-600">
            <FaFacebook size={20} />
            <span>Facebook</span>
          </div>
          <div className="flex flex-col items-center text-red-500">
            <FaEnvelope size={20} />
            <span>Email</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPageOne;
