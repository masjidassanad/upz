import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * React Query: Manage server state (API data)
 * - QueryClientProvider: Makes the React Query client available to all components in your app.
 * - QueryClient: Manages caching, background updates, and other features of React Query.
 */
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from "@assanad/services/queryClient";

/**
 * Zustand: Manage global state
 * - create: Create a store.
 * - useStore: Use the store in your app.
 */
// import { create } from "zustand";


import Router from "@assanad/Router.jsx";

createRoot(document.getElementById('root')).render(
  /* <StrictMode> */
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  /* </StrictMode> */
)
