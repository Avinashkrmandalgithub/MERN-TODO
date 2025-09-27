import { FaEdit, FaTrash } from "react-icons/fa";

const TodoCard = ({
  todo,
  editingId,
  editTitle,
  editBody,
  setEditTitle,
  setEditBody,
  toggleTodo,
  startEditing,
  saveEdit,
  handleDelete,
}) => {
  return (
    <div
      className={`p-5 rounded-2xl shadow-md transition 
        ${todo.completed ? "bg-green-50 dark:bg-green-900/20 text-green-600 line-through" : "bg-white dark:bg-gray-800 dark:text-gray-200"}`}
    >
      {editingId === todo.id ? (
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none bg-white dark:bg-gray-700 dark:text-gray-200"
          />
          <textarea
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
            rows={3}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none bg-white dark:bg-gray-700 dark:text-gray-200"
          />
          <button
            onClick={() => saveEdit(todo.id)}
            className="px-5 py-2 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-xl hover:opacity-90"
          >
            Save
          </button>
        </div>
      ) : (
        <div onClick={() => toggleTodo(todo.id)} className="cursor-pointer">
          <h3 className="font-semibold text-lg">{todo.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{todo.body}</p>
        </div>
      )}

      <div className="flex items-center space-x-3 mt-4">
        <button
          onClick={() => startEditing(todo.id, todo.title, todo.body)}
          className="text-blue-500 hover:text-blue-700"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => handleDelete(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
