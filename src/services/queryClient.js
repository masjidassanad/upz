import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 15, // 15 minutes - browser cache
      gcTime: 1000 * 60 * 5, // 5 minutes - garbage collection
    },
  },
});

export default queryClient;
