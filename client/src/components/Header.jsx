import { FaSignOutAlt } from "react-icons/fa";

const Header = ({ filter, setFilter, handleLogout }) => {
  return (
    <header
      className="sticky top-0 z-50 flex flex-col sm:flex-row justify-between items-center mb-6 px-4 sm:px-6 lg:px-8 py-4 rounded-3xl shadow-lg 
                 bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/20"
    >
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-0 text-center sm:text-left">
        <span className="text-orange-400">Todo </span>
        <span className="text-purple-400">Dash</span>
        <span className="text-green-400">board</span>
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-3 sm:mb-0">
        {["all", "active", "completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 sm:px-4 py-1 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition 
              ${
                filter === type
                  ? "bg-gradient-to-r from-orange-400 to-green-400 text-white shadow-md"
                  : "bg-white/40 dark:bg-gray-800/40 hover:bg-white/50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200"
              } backdrop-blur-md`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-xl transition 
                   bg-white/40 dark:bg-gray-800/40 hover:bg-white/50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-md"
      >
        <FaSignOutAlt size={16} className="sm:mr-1" />
        <span className="text-xs sm:text-sm">Logout</span>
      </button>
    </header>
  );
};

export default Header;
