import { useState } from "react";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore.js";
import toast from "react-hot-toast";

const SignInPage = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();
  const { login, loading, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) { toast.success(`Welcome back, ${user.username}! 🎉`); navigate("/home"); }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Welcome Back</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">Sign in to continue to your todos</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><FaEnvelope /></span>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 pl-10 pr-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-gray-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><FaLock /></span>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 pl-10 pr-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-gray-200"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 py-3 px-4 font-semibold text-white rounded-xl shadow-md bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 hover:opacity-90 transition-all duration-300"
          >
            <FaArrowRight /> {loading ? "Signing In..." : "Sign In"}
          </button>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-semibold text-orange-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
