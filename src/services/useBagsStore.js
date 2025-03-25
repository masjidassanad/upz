import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { set, get } from 'lodash';

const FLUSH_INTERVAL_HOURS = 6; // Set flush interval (e.g., every x hours)

const useBagsStore = create(
  persist(
    (setState, getState) => ({
      bags: {},
      bagsLoading: false,
      bagsError: null,
      lastUpdated: null, // Stores last update timestamp

      /**
       * Function to dynamically set values in "bags"
       * Example of set:
       * - setBags('programs', resultPrograms)
       * - setBags('program.zakat', resultZakat)
       * - setBags('settings.group.key', resultZakat)
       */
      setBags: (path, value) => {
        setState((state) => {
          const currentValue = get(state.bags, path);
          if (currentValue === value) return state;

          return {
            bags: set({ ...state.bags }, path, value),
            lastUpdated: Date.now(), // Update timestamp
          };
        });
      },

      /**
       * Function to dynamically get values from "bags"
       * Example of get:
       * - getBags('programs')
       * - getBags('program.zakat')
       * - getBags('settings.group.key')
       */
      getBags: (path = '', defaultValue = null) => {
        if (!path) return getState().bags;
        return get(getState().bags, path, defaultValue);
      },

      /**
       * Function to clear bags (flush data)
       */
      flushBags: () => {
        setState({
          bags: {},
          lastUpdated: Date.now(), // Reset timestamp after flushing
        });
      },

      /**
       * Function to check and flush bags if they are older than FLUSH_INTERVAL_HOURS
       */
      checkAndFlushBags: (dataVersion = null) => {
        if (!dataVersion) return;

        const { lastUpdated, cacheVersion } = getState();
        const shouldFlush =
          cacheVersion !== dataVersion || // Version changed
          (Date.now() - (lastUpdated || 0)) / (1000 * 60 * 60) >= FLUSH_INTERVAL_HOURS; // Data expired

        if (!shouldFlush) return;

        getState().flushBags();
        setState({
          cacheVersion: dataVersion,
          lastUpdated: Date.now()
        });
      },
    }),
    {
      name: 'assanad-upz', // Local storage key
    }
  )
);

export default useBagsStore;
