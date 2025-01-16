// LoginPageTwo.jsx
import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

function LoginPageTwo() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="font-sans max-w-md mx-auto py-12 px-6 text-center border border-gray-300 rounded-lg bg-white shadow-lg">
      <div className="text-3xl font-bold mb-6">MyApp</div>
      
      {/* Login or Signup Form */}
      {!isSignup ? (
        <>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username or Email"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="p-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
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
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="p-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
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
      <div className="mt-8 flex justify-center items-center gap-8">
        <div className="flex flex-col items-center text-gray-500">
          <FaGoogle size={30} />
          <span>Google</span>
        </div>
        <div className="flex flex-col items-center text-gray-800">
          <FaApple size={30} />
          <span>Apple</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPageTwo;
