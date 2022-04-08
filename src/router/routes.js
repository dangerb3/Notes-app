import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import { useRoutes } from "react-router-dom";

export default function Router() {
  const routes = useRoutes([
    { path: "/about", element: <About /> },
    { path: "/posts", element: <Posts /> },
    { path: "/posts/:id", element: <PostIdPage /> },
  ]);

  return routes;
}
