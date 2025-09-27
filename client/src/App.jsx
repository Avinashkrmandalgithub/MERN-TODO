import React from "react";
import { useEffect } from "react";
import useAuthStore from "./store/useAuthStore.js";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUpPage.jsx";
import SignInPage from "./pages/auth/SignInPage.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  const getUser = useAuthStore((state) => state.getUser);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />

      <Route path="/home" element={<Home />} />

      {/* default route */}
      <Route path="/" element={<SignInPage />} />
    </Routes>
  );
};

export default App;
