import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';

const AppRouter = () => {
    return (
        <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    );
}

export default AppRouter;
