import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

import LoginPage from "./pages/Login/login";
import Dashboard from "./layouts/Dashboard";
import NonAuth from "./layouts/NonAuth";
import CategoryPage from "./pages/CategoryPage";
import Root from "./layouts/Root";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "categories",
            element: <CategoryPage />,
          },
          {
            path: "products",
            element: <Products />,
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
    ],
  },
]);
