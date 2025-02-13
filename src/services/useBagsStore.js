import { create } from 'zustand';
import { set, get } from 'lodash';

/**
 * General dot notation bags store.
 *
 * Example usage with useEffect to monitor specific bag key:
 *
 * useEffect(() => {
 *   const amount = useBagsStore.getState().getBags('program.zakat.amount');
 *   if (amount) {
 *     // Do something with the amount
 *     console.log('Zakat amount changed:', amount);
 *   }
 * }, [useBagsStore.getState().bags.program?.zakat?.amount]);
 *
 * This will trigger whenever the zakat amount changes in the bags store.
 */
const useBagsStore = create((setState, getState) => ({
  bags: {},
  bagsLoading: false,
  bagsError: null,

  /**
   * Function to dynamically set values in "bags"
   *
   * Example of set:
   * - setBags('programs', resultPrograms)
   * - setBags('program.zakat', resultZakat)
   * - setBags('settings.group.key', resultZakat)
   */
  setBags: (path, value) => {
    setState((state) => ({
      bags: set({ ...state.bags }, path, value),
    }));
  },

  /**
   * Function to dynamically get values from "bags"
   *
   * Example of get:
   * - getBags('programs')
   * - getBags('program.zakat')
   * - getBags('settings.group.key')
   */
  getBags: (path, defaultValue = null) => {
    return get(getState().bags, path, defaultValue);
  },

  setBagsLoading: (loading) => {
    setState({ bagsLoading: loading });
  },

  setBagsError: (error) => {
    setState({ bagsError: error });
  },
}));

export default useBagsStore;
