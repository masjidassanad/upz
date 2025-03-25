import { useQuery } from "@tanstack/react-query";
import apiSupabase from "./apiSupabase";

/*
Hook usage examples:

1. Fetching settings:
const { data: settings, isLoading, error } = useSettings();

2. Fetching programs with options:
const { data: programs } = usePrograms({ status: 'publish', featured: true });

3. Fetching initial data (settings + programs):
const { data: initData } = useInitData();

4. Fetching transactions for a program:
const { data: transactions } = useTransactionsByProgramId(programId);

5. Fetching posts for a program:
const { data: posts } = usePostsByProgramId(programId, { status: 'publish' });

Note: All hooks return the standard React Query object with:
- data: The fetched data
- isLoading: Loading state
- error: Error object if any
- isError: Boolean indicating if error occurred
- refetch: Function to manually refetch data
*/

export const useSettings = () => {
  return useQuery({
    queryKey: ["settings"],
    queryFn: apiSupabase.getSettings
  });
};

export const usePrograms = (options = {}) => {
  return useQuery({
    queryKey: ["programs", options],
    queryFn: () => apiSupabase.getPrograms(options)
  });
};

export const useInitData = () => {
  return useQuery({
    queryKey: ["initData"],
    queryFn: apiSupabase.getInit
  });
};

export const useTransactionsByProgramId = (programId) => {
  return useQuery({
    queryKey: ["transactions", programId],
    queryFn: () => apiSupabase.getTransactionsByProgramId(programId),
    enabled: !!programId // Only run if programId exists
  });
};

export const usePostsByProgramId = (programId, options = {}) => {
  return useQuery({
    queryKey: ["posts", programId, options],
    queryFn: () => apiSupabase.getPostsByProgramId(programId, options),
    enabled: !!programId // Only run if programId exists
  });
};
