import { useEffect } from "react";
import useAuthStore from "../store/useAuthStore.js";

const WelcomeUser = () => {
  const { user, getUser } = useAuthStore();

  useEffect(() => {
    if (!user) {
      getUser(); // fetch user details from backend
    }
  }, [user, getUser]);

  if (!user) return null; // or a loading placeholder

  return (
    <div className="text-center max-w-full sm:max-w-3xl mx-auto mt-4 sm:mt-6 px-4 sm:px-6 py-4 rounded-2xl shadow-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-200">
      <p className="text-base sm:text-lg">
        Welcome back, <span className="font-semibold">{user.username}</span>!
      </p>
    </div>
  );
};

export default WelcomeUser;
