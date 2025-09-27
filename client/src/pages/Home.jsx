import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

import useTodoStore from "../store/useTodoStore.js";
import useAuthStore from "../store/useAuthStore.js"; 

import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

import TodoCard from "../components/TodoCard.jsx";
import Header from "../components/Header.jsx";
import TodoInput from "../components/TodoInput.jsx";
import TodoStatsFilter from "../components/TodoStatsFilter.jsx";
import EmptyState from "../components/EmptyState.jsx";
import WelcomeUser from "../components/WelcomeUser.jsx";

const Home = () => {
  const {
    todos,
    fetchTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    loading,
    error,
  } = useTodoStore();

  const { logout } = useAuthStore(); 
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  // Load todos on mount
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAdd = async () => {
    if (!title.trim() || !body.trim()) return;
    await createTodo(title, body);
    setTitle("");
    setBody("");
  };

  const startEditing = (id, title, body) => {
    setEditingId(id);
    setEditTitle(title);
    setEditBody(body);
  };

  const saveEdit = async (id) => {
    await updateTodo(id, editTitle, editBody);
    setEditingId(null);
    setEditTitle("");
    setEditBody("");
  };

  // ✅ Wire up logout
  const handleLogout = async () => {
    await logout();        
    navigate("/signin");    
    toast.success("logged out")
  };

  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter((t) => !t.completed)
      : todos.filter((t) => t.completed);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Header filter={filter} setFilter={setFilter} handleLogout={handleLogout} />
      <WelcomeUser username="Avinash" />

      {/* Input */}
      <TodoInput
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        handleAdd={handleAdd}
      />

      {/* Stats + Filter */}
      <TodoStatsFilter todos={todos} filter={filter} setFilter={setFilter} />

      {/* Error state */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Todos */}
      <div className="max-w-3xl mx-auto mt-4">
        {loading ? (
          <p className="text-center text-gray-500">Loading todos...</p>
        ) : filteredTodos.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence>
              {filteredTodos.map((todo) => (
                <motion.div
                  key={todo._id} // ✅ MongoDB _id
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
                    handleDelete={deleteTodo}
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
