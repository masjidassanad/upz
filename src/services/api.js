import axios from 'axios';

const config = {
  baseURL: 'https://script.google.com/macros/s/AKfycbxF4dytodtfMhzGJJTxSPrQTMYa63G1N1Ei3dK09RdG5eS0UKQFBU2lrvpS7OrFTEqX/',
  headers: {
    'Content-Type': 'application/json',
  },

  apiEndpoint: {
    settings: 'exec?endpoint=settings',
    programs: 'exec?endpoint=programs',
  },
}

const api = axios.create({
  baseURL: config.baseURL,
  headers: config.headers,
});

const getSettings = async () => {
  const response = await api.get(config.apiEndpoint.settings);
  return response.data;
};

const getPrograms = async () => {
  const response = await api.get(config.apiEndpoint.programs);
  return response.data;
};

export default {
  getSettings,
  getPrograms,
};
