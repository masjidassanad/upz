import { useQuery } from "@tanstack/react-query";
import api from "@assanad/services/api";

/*
Hook for fetching settings data

Example:
import { useSettingsData } from "@assanad/services/useDataGoogleSheet";
const { data: settingsData, isLoading, error } = useSettingsData();

useEffect(() => {
  if (settingsData) {
    setBags('settings', settingsData);
  }
}, [settingsData]);

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error fetching settings: {error.message}</div>;

// OR

{isLoading ? (
  <div>Loading...</div>
) : error ? (
  <div>Error fetching settings: {error.message}</div>
) : (
  <Outlet />
)}
*/
export const useSettingsData = () => {
  return useQuery({
    queryFn: () => api.getSettings(),
    queryKey: ['settings.main'], // Unique key for caching
    enabled: true,
  });
};

/*
Hook for fetching program data

Example:
import { useProgramData } from "@assanad/services/useDataGoogleSheet";
const { data: programData, isLoading, error } = useProgramData('zakat', 'apiUrlParam');

useEffect(() => {
  if (programData) {
    setBags('program.zakat', programData);
  }
}, [programData]);

<h2>Program Data</h2>
{isLoading ? (
  <div>Loading...</div>
) : error ? (
  <div>Error fetching program data: {error.message}</div>
) : (
  <div>{getBags('program.zakat.detail.name')}</div>
)}
*/
export const useProgramData = (sheet, node) => {
  return useQuery({
    queryFn: () => api.getProgramData(sheet, node),
    queryKey: ['program.data', sheet, node], // Unique key for caching
    enabled: Boolean(sheet) && Boolean(node),
  });
};
