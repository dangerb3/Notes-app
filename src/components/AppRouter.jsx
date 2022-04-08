import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import { PublicRouter, PrivateRouter } from '../router/routes';

const AppRouter = () => {
    const isAuth = true;

    return (
    <BrowserRouter>
      <Navbar />
        {
        isAuth
      ? <PrivateRouter/>
      : <PublicRouter/>
        }
    </BrowserRouter>
    );
}

export default AppRouter;
