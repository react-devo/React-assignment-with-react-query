import React, { ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App.tsx";
import Login from "../login/Login.tsx";
import SingleProductPage from "../product/ProductView.tsx";
import ProductsList from "../product/ProductsListing.tsx";
import { ProtectedRoute, PublicRoute } from "./middleware.tsx";
import ErrorPage from "../ErrorPage.tsx";

interface Route {
  path: string;
  element: ReactNode;
}

const routes: Route[] = [
  {
    path: "/",
    element: <ProtectedRoute><App /></ProtectedRoute>,
  },
  {
    path: "/login",
    element: <PublicRoute> <Login /></PublicRoute>,
  },
  {
    path: "/view-all-products",
    element: <ProtectedRoute><ProductsList viewAll={true} /></ProtectedRoute>,
  },
  {
    path: "/single-product-view/:productId",
    element: <ProtectedRoute><SingleProductPage /></ProtectedRoute>,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export const AllRoutes = createBrowserRouter(routes);
