import React, { useEffect } from "react";
import useAuthStore from "./store/useAuthStore.js";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUpPage.jsx";
import SignInPage from "./pages/auth/SignInPage.jsx";
import Home from "./pages/Home.jsx";


const Layout = ({ children }) => (
  <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const App = () => {
  const getUser = useAuthStore((state) => state.getUser);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/home" element={<Home />} />
        {/* default route */}
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
