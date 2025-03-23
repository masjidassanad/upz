import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "@assanad/App";
import ErrorBoundary from "@assanad/ErrorBoundary";

import Home from "@assanad/pages/Home";
// TODO: import Zakat from "@assanad/pages/Ziswah";
import Zakat from "@assanad/pages/Zakat";
import Infaq from "@assanad/pages/Infaq";
import Programs from "@assanad/pages/Programs";
import Program from "@assanad/pages/Program";
import Kontak from "@assanad/pages/Kontak";
import Konfirmasi from "@assanad/pages/Konfirmasi";
import NotFound from "@assanad/pages/NotFound.jsx";

const Router = () => {
  // console.log('=== Router.jsx ===');

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
          path: "zakat",
          element: <Zakat />,
        },
        {
          path: "infaq",
          element: <Infaq />,
        },
        {
          path: "programs",
          element: <Programs />,
        },
        {
          path: "program/:codename",
          element: <Program />,
        },
        {
          path: "kontak",
          element: <Kontak />,
        },
        {
          path: "konfirmasi",
          element: <Konfirmasi />,
        },
      ],
    },
  ], {
    // basename: '/upz/',
  });

  return <RouterProvider router={router} />;
};

export default Router;
