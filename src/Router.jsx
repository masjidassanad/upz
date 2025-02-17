import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "@assanad/App";
import ErrorBoundary from "@assanad/ErrorBoundary";

import Home from "@assanad/pages/Home";
import Program from "@assanad/pages/Program";
import NotFound from "@assanad/pages/NotFound.jsx";

const Router = () => {
  console.log('=== Router.jsx ===');

  const router = createHashRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "program/:codename",
          element: <Program />,
        },
      ],
    },
  ], {
    // basename: '/upz/',
  });

  return <RouterProvider router={router} />;
};

export default Router;
