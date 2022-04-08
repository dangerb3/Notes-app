import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import Router from '../router/routes';

const AppRouter = () => {
    return (
        <BrowserRouter>
      <Navbar />
      <Router/>
    </BrowserRouter>
    );
}

export default AppRouter;
