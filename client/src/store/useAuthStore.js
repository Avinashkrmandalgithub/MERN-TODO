import { create } from "zustand";
import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL;


const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  register: async (email, username, password) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.post(
        `${API_URL}/api/auth/register`,
        {
          email,
          username,
          password,
        },
        { withCredentials: true }
      );
      set({ user: data.user, loading: false, error: null });

      return data.user;
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.post(
        `${API_URL}/api/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      set({ user: data.user, loading: false, error: null });

      return data.user;
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      await axios.post(
        `${API_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      set({ user: null, loading: false, error: null });
    
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  getUser: async () => {
    set({ loading: true });
    try {
      const { data } = await axios.get(`${API_URL}/api/auth/me`, {
        withCredentials: true,
      });
      set({ user: data.user, loading: false, error: null });

      return data.user;
    } catch (error) {
      set({
        user: null,
        loading: false,
        error: error.response?.data?.message || error.message,
      });
    }
  },
}));

export default useAuthStore;
