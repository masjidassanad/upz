import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "@assanad/App";
import ErrorBoundary from "@assanad/ErrorBoundary";

import Home from "@assanad/pages/Home";
import Ziswah from "@assanad/pages/Ziswah";
import Zakat from "@assanad/pages/Zakat";
import Infaq from "@assanad/pages/Infaq";
import DonasiListing from "@assanad/pages/DonasiListing";
import DonasiPage from "@assanad/pages/DonasiPage";
import Kontak from "@assanad/pages/Kontak";
import Checkout from "@assanad/pages/Checkout";
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
          path: "ziswah",
          element: <Ziswah />,
        },
        {
          path: "ziswah/zakat",
          element: <Zakat />,
        },
        {
          path: "ziswah/infaq",
          element: <Infaq />,
        },
        {
          path: "donasi",
          element: <DonasiListing />,
        },
        {
          path: "donasi/:codename",
          element: <DonasiPage />,
        },
        {
          path: "kontak",
          element: <Kontak />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
  ], {
    // basename: '/upz/',
  });

  return <RouterProvider router={router} />;
};

export default Router;
