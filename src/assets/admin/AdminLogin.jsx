import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../assets/components/navigation/Navbar";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Dummy admin credentials
  const adminUsername = "admin";
  const adminPassword = "admin123";

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    // Check if entered credentials match dummy admin credentials
    if (username === adminUsername && password === adminPassword) {
      navigate("/dashboard"); // Redirect to /admin/dashboard if login is successful
    } else {
      alert("Invalid admin username or password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col items-center">
        <div className="w-96 flex flex-col gap-6 mt-20">
          <h1 className="font-bold">Admin Login</h1>

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
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
