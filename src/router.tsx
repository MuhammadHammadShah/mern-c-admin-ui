import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

import LoginPage from "./pages/Login/login";
import Dashboard from "./layouts/Dashboard";
import NonAuth from "./layouts/NonAuth";
import CategoryPage from "./pages/CategoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "categories",
        element: <CategoryPage />,
      },
    ],
  },

  {
    path: "/auth",
    element: <NonAuth />,

    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
