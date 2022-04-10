import React from "react";
import { useState, useEffect } from "react";
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context/index";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) setIsAuth(true);
    setIsAuthLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        setIsAuth: setIsAuth,
        isAuthLoading: isAuthLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
