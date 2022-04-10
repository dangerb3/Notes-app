import React from 'react';
import { useContext } from 'react';
import { PublicRouter, PrivateRouter } from '../router/routes';
import { AuthContext } from '../context/index';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isAuthLoading} =  useContext(AuthContext);

    if (isAuthLoading) return <Loader/>

    return (

        isAuth
      ? <PrivateRouter/>
      : <PublicRouter/>
        
    );
}

export default AppRouter;
