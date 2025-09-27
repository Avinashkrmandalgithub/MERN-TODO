import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore.js";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();
  const { register, loading, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, username, password);
    if (user) { toast.success("Account created successfully ✅"); navigate("/signin"); }
    else if (error) toast.error(error);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Create Account</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">Join us and start organizing your life</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaUser className="w-5 h-5 text-gray-400" /></span>
              <input
                type="text"
                value={username}
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full py-2 pl-10 pr-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaEnvelope className="w-5 h-5 text-gray-400" /></span>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 pl-10 pr-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaLock className="w-5 h-5 text-gray-400" /></span>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 pl-10 pr-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 py-3 px-4 font-semibold text-white rounded-xl shadow-md bg-gradient-to-r from-orange-400 via-teal-400 to-purple-500 hover:opacity-90 transition-all duration-300"
          >
            <FaUserPlus /> {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/signin" className="font-semibold text-orange-600 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
