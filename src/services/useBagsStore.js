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
      checkAndFlushBags: (apiVersion = null) => {
        const { lastUpdated, appVersion } = getState();
        const elapsedHours = (Date.now() - (lastUpdated || 0)) / (1000 * 60 * 60);

        // Purge if stored version is different from API version
        if (apiVersion && appVersion !== apiVersion) {
          console.log(`UPZ Masjid Assanad -- Data version changed, purging data...`);
          getState().flushBags();

        // Purge if data is too old (e.g., expired after X hours)
        } else if (elapsedHours >= FLUSH_INTERVAL_HOURS) {
          console.log(`UPZ Masjid Assanad -- Data expired after ${FLUSH_INTERVAL_HOURS} hours, purging data...`);
          getState().flushBags();
        }

        // Update the stored version and last updated time
        setState({ appVersion: apiVersion || appVersion, lastUpdated: Date.now() });
      },
    }),
    {
      name: 'assanad-upz', // Local storage key
    }
  )
);

export default useBagsStore;
