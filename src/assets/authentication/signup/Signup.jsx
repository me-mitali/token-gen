import Navbar from "../../components/navigation/Navbar";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col items-center">
        <div className="w-96 flex flex-col gap-6 mt-20">
          {/* Username */}
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Department */}
          <div className="flex flex-col gap-2">
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              id="department"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            >
              <option value="">Select Department</option>
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="hr">HR</option>
            </select>
          </div>

          {/* Designation */}
          <div className="flex flex-col gap-2">
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <select
              id="designation"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            >
              <option value="">Select Designation</option>
              <option value="manager">Manager</option>
              <option value="teamLead">Team Lead</option>
              <option value="intern">Intern</option>
              <option value="associate">Associate</option>
            </select>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-blue-500 hover:underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
