import React from 'react';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />}/>
        <Route path="/posts/:id" element={<PostIdPage/>} />
      </Routes>
    </BrowserRouter>
    );
}

export default AppRouter;
