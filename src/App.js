import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';
import { AuthContext } from './context/index';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) setIsAuth(true);
    setIsAuthLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      // useMemo
      value={{
        isAuth,
        setIsAuth,
        isAuthLoading,
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
