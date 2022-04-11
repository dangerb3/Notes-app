import { useRoutes, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';

export function PrivateRouter() {
  const routes = useRoutes([
    { path: '/about', element: <About /> },
    { path: '/posts', element: <Posts /> },
    { path: '/posts/:id', element: <PostIdPage /> },
    { path: '*', element: <Navigate to="/posts" /> },
  ]);

  return routes;
}

export function PublicRouter() {
  const routes = useRoutes([
    { path: '/login', element: <Login /> },
    { path: '*', element: <Navigate to="/login" /> },
  ]);

  return routes;
}
