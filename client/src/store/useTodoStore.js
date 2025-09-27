import axios from "axios";
import { create } from "zustand";

const API_URL = import.meta.env.API_URL;

const useTodoStore = create((set, get) => ({
  todos: [],
  loading: false,
  error: null,

  // Fetch all todos
  fetchTodos: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get(`${API_URL}/api/todos`, {
        withCredentials: true,
      });
      set({ todos: data.todos || [], loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  // Create a new todo
  createTodo: async (title, body) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.post(
        `${API_URL}/api/todos`,
        { title, body },
        { withCredentials: true }
      );
      set({
        todos: [data.todo, ...get().todos],
        loading: false,
      });
      return data.todo;
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  // Update an existing todo
  updateTodo: async (id, title, body) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.put(
        `${API_URL}/api/todos/${id}`,
        { title, body },
        { withCredentials: true }
      );
      set({
        todos: get().todos.map((todo) =>
          todo._id === id ? data.todo : todo
        ),
        loading: false,
      });
      return data.todo;
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  // Delete a todo
  deleteTodo: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${API_URL}/api/todos/${id}`, {
        withCredentials: true,
      });
      set({
        todos: get().todos.filter((todo) => todo._id !== id),
        loading: false,
      });
      return true;
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
      return false;
    }
  },

  // Toggle todo completion
  toggleTodo: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.patch(
        `${API_URL}/api/todos/${id}/toggle`,
        {},
        { withCredentials: true }
      );
      set({
        todos: get().todos.map((todo) =>
          todo._id === id ? data.todo : todo
        ),
        loading: false,
      });
      return data.todo;
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },
}));

export default useTodoStore;
