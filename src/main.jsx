import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from "@assanad/services/queryClient";

import Router from "@assanad/Router.jsx";

createRoot(document.getElementById('root')).render(
  /* <StrictMode> */
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  /* </StrictMode> */
)
