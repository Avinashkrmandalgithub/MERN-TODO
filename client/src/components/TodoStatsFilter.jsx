import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const TodoStatsFilter = ({ todos, filter, setFilter }) => {
  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="max-w-3xl mx-auto mt-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4 text-gray-600 dark:text-gray-300">
        <p className="flex items-center space-x-2">
          <FaRegCircle className="text-orange-500" />
          <span>{activeCount} active</span>
        </p>
        <p className="flex items-center space-x-2">
          <FaCheckCircle className="text-green-500" />
          <span>{completedCount} completed</span>
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-2">
        {["all", "active", "completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition 
              ${
                filter === type
                  ? "bg-gradient-to-r from-orange-400 to-green-400 text-white shadow-md"
                  : "bg-white/40 dark:bg-gray-700/40 hover:bg-white/50 dark:hover:bg-gray-600/50 text-gray-700 dark:text-gray-200 backdrop-blur-md"
              }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoStatsFilter;
