import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignup ? "Signup attempted" : "Login attempted", { username, email, password, keepLoggedIn });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-purple-700"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1018056532/vector/vector-illustration-of-mountain-landscape-with-multiple-layers-fog-and-yellow-purple-sky.jpg?s=612x612&w=0&k=20&c=H06VAjGLW4GwwfzULpCHuDEXRVNfgd2VAGnqHWi12Jk=')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          {isSignup ? "Create an Account" : "User Login"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignup && (
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isSignup && (
            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-purple-500"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                />
                <span>Keep me logged in</span>
              </label>
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded font-semibold transition duration-200"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="text-center text-gray-400 mt-6">
          <span>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
          </span>
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="ml-2 text-purple-500 hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
