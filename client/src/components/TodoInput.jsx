import { FaPlus } from "react-icons/fa";

const TodoInput = ({ title, setTitle, body, setBody, handleAdd }) => {
  return (
    <div className="max-w-full sm:max-w-3xl mx-auto mt-6 sm:mt-10 bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 sm:p-6 flex flex-col space-y-3 sm:space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none bg-white dark:bg-gray-700 dark:text-gray-200 text-sm sm:text-base"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter todo details"
        rows={3}
        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none bg-white dark:bg-gray-700 dark:text-gray-200 text-sm sm:text-base"
      />
      <button
        onClick={handleAdd}
        className="flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-orange-400 to-green-400 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl hover:opacity-90 transition text-sm sm:text-base"
      >
        <FaPlus size={16} sm={18} />
        <span>Add Todo</span>
      </button>
    </div>
  );
};

export default TodoInput;
