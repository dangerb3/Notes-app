import React from "react";
import { useState } from "react";
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context/index";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        setIsAuth: setIsAuth,
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
