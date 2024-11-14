import Navbar from "../../components/navigation/Navbar";

function TokenGenerator() {
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col items-center">
        <div className="w-96 flex flex-col gap-6 mt-20">
        <h1 className="font-bold ">Enter details to generate token</h1>

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

          {/* Token Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="tokenName" className="block text-sm font-medium text-gray-700">
              Token Name
            </label>
            <input
              type="text"
              id="tokenName"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter token name"
              required
            />
          </div>

          {/* Token Description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="tokenDescription" className="block text-sm font-medium text-gray-700">
              Token Description
            </label>
            <textarea
              id="tokenDescription"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter token description"
              required
            />
          </div>

          {/* Token Expiry */}
          <div className="flex flex-col gap-2">
            <label htmlFor="tokenExpiry" className="block text-sm font-medium text-gray-700">
              Token Expiry
            </label>
            <select
              id="tokenExpiry"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            >
              <option value="">Select Expiry</option>
              <option value="3">3 days</option>
              <option value="7">7 days</option>
              <option value="9">9 days</option>
              <option value="30">30 days</option>
              <option value="no-expiry">No expiry</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Generate Token
          </button>
        </div>
      </div>
    </>
  );
}

export default TokenGenerator;
