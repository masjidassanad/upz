import axios from 'axios';

/**
 * Usage example:
 - https://script.google.com/macros/s/SCRIPT_ID/exec?sheet=programs&tabs=detail,muhsinin&page=2&limit=100&headrow=2
 - https://script.google.com/macros/s/SCRIPT_ID/exec?sheet=programs&cache=0

 * Real URL
 - https://script.google.com/macros/s/AKfycbxF4dytodtfMhzGJJTxSPrQTMYa63G1N1Ei3dK09RdG5eS0UKQFBU2lrvpS7OrFTEqX/exec?sheet=program&tabs=programs,settings&limit=100
 */

//=== Main API endpoint ===
const API = axios.create({
  baseURL: 'https://script.google.com/macros/s/AKfycbxF4dytodtfMhzGJJTxSPrQTMYa63G1N1Ei3dK09RdG5eS0UKQFBU2lrvpS7OrFTEqX',
  headers: { 'Content-Type': 'application/json' },
});

const getSettings = async () => {
  const response = await API.get('exec?sheet=program&tabs=programs,settings&limit=50');
  const results = response.data;

  const programsList = results.programs.data.filter(program => program.id !== '');

  return {
    programs: programsList,
    settings: results.settings.data,
  };
};

//=== Program API endpoint ===
const programApi = {
  'zakat': {
    apiUrlParam: 'exec?sheet=zakat&tabs=detail,muhsinin,info',
  },
};

const getProgramData = async (sheet, node) => {
  if (!programApi[sheet] || !programApi[sheet][node]) {
    throw new Error(`Invalid API endpoint for sheet: ${sheet}, node: ${node}`);
  }

  const response = await API.get(programApi[sheet][node]);
  const results = response.data;

  return {
    detail: results.detail.data,
    muhsinin: results.muhsinin.data,
    info: results.info.data,
  };
};

export default {
  getSettings,
  getProgramData,
};
