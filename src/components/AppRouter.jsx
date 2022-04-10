import React from 'react';
import { useContext } from 'react';
import { PublicRouter, PrivateRouter } from '../router/routes';
import { AuthContext } from '../context/index';

const AppRouter = () => {
    const {isAuth} =  useContext(AuthContext);

    return (

        isAuth
      ? <PrivateRouter/>
      : <PublicRouter/>
        
    );
}

export default AppRouter;
