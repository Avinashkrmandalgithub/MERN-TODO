import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TodoCard from "../components/TodoCard.jsx";
import Header from "../components/Header.jsx";
import TodoInput from "../components/TodoInput.jsx";
import TodoStatsFilter from "../components/TodoStatsFilter.jsx";
import EmptyState from "../components/EmptyState.jsx";
import WelcomeUser from "../components/WelcomeUser.jsx";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const handleAdd = () => {
    if (!title.trim() || !body.trim()) return;
    setTodos([...todos, { id: Date.now(), title, body, completed: false }]);
    setTitle("");
    setBody("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id, title, body) => {
    setEditingId(id);
    setEditTitle(title);
    setEditBody(body);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editTitle, body: editBody } : todo
      )
    );
    setEditingId(null);
    setEditTitle("");
    setEditBody("");
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter((t) => !t.completed)
      : todos.filter((t) => t.completed);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Header
        filter={filter}
        setFilter={setFilter}
        handleLogout={handleLogout}
      />
      <WelcomeUser username="Avinash" />

      {/* Todo Input */}
      <TodoInput
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        handleAdd={handleAdd}
      />

      {/* Stats + Filter */}
      <TodoStatsFilter todos={todos} filter={filter} setFilter={setFilter} />

      {/* Todo List */}
      <div className="max-w-3xl mx-auto mt-4">
        {filteredTodos.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence>
              {filteredTodos.map((todo) => (
                <motion.div
                  key={todo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <TodoCard
                    todo={todo}
                    editingId={editingId}
                    editTitle={editTitle}
                    editBody={editBody}
                    setEditTitle={setEditTitle}
                    setEditBody={setEditBody}
                    toggleTodo={toggleTodo}
                    startEditing={startEditing}
                    saveEdit={saveEdit}
                    handleDelete={handleDelete}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
