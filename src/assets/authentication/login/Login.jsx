import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Dummy credentials
  const dummyUsername = "mitali@token.com";
  const dummyPassword = "pass@123";

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    // Check if entered credentials match dummy credentials
    if (username === dummyUsername && password === dummyPassword) {
      navigate("/user"); // Redirect to /user if login is successful
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col items-center">
        <div className="w-96 flex flex-col gap-6 mt-20">
          <h1 className="font-bold">User Login</h1>

          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username / Email
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>

          <div className="text-center flex gap-4 justify-evenly">
            <p className="text-sm text-gray-600">
              New user?{' '}
              <a href="/signup" className="font-medium text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Login as Admin?{' '}
              <a href="/admin" className="font-medium text-blue-500 hover:underline">
                Admin Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
