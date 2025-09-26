import { useState } from "react";
import { FaSignOutAlt, FaPlus, FaCheckCircle, FaRegCircle } from "react-icons/fa";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAdd = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter((t) => !t.completed)
      : todos.filter((t) => t.completed);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
        <h1 className="text-2xl font-bold">
          <span className="text-orange-500">Todo </span>
          <span className="text-purple-500">Dash</span>
          <span className="text-green-500">board</span>
        </h1>
        <div className="flex items-center space-x-4">
          <p className="text-gray-600">
            Welcome back, <span className="font-medium">test!</span>
          </p>
          <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl">
            <FaSignOutAlt size={18} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Input */}
      <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-6 flex items-center space-x-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
        />
        <button
          onClick={handleAdd}
          className="flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-green-400 text-white px-5 py-3 rounded-xl hover:opacity-90"
        >
          <FaPlus size={18} />
          <span>Add</span>
        </button>
      </div>

      {/* Stats + Filter */}
      <div className="max-w-3xl mx-auto mt-6 bg-white shadow-md rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-6 text-gray-600">
            <p className="flex items-center space-x-2">
              <FaRegCircle className="text-orange-500" />
              <span>{todos.filter((t) => !t.completed).length} active</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>{todos.filter((t) => t.completed).length} completed</span>
            </p>
          </div>
          <div className="flex space-x-2">
            {["all", "active", "completed"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-xl ${
                  filter === type
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Todo List */}
        {filteredTodos.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
              alt="empty"
              className="w-16 mx-auto mb-4 opacity-70"
            />
            <p className="text-lg font-medium">No todos yet</p>
            <p className="text-sm">Add your first todo to get started!</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {filteredTodos.map((todo) => (
              <li
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer ${
                  todo.completed
                    ? "bg-green-50 text-green-600 line-through"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <span>{todo.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
