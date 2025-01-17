// LoginPageEight.jsx
import React, { useState } from "react";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

function LoginPageEight() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="font-sans max-w-md mx-auto py-12 px-6 text-center border border-gray-300 rounded-lg bg-white">
      <div className="text-4xl font-bold text-black mb-6">GitHub</div>

      {/* Login or Signup Form */}
      {!isSignup ? (
        <>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="p-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
            >
              Login
            </button>
          </form>

          <p className="mt-6">
            Don't have an account?{" "}
            <span
              onClick={() => setIsSignup(true)}
              className="text-black cursor-pointer hover:underline"
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
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="p-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6">
            Already have an account?{" "}
            <span
              onClick={() => setIsSignup(false)}
              className="text-black cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </>
      )}

      {/* Login Options */}
      <div className="mt-8 flex justify-center items-center gap-8">
        <div className="flex flex-col items-center text-black">
          <FaGithub size={30} />
          <span>GitHub</span>
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

export default LoginPageEight;
