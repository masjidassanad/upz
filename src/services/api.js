import axios from 'axios';

const googleApi = 'https://script.google.com/macros/s/';

// Main API endpoint
const mainApi = {
  file: 'GDrive/UPZ/microsite/00-Programs',
  instance: axios.create({
    baseURL: `${googleApi}AKfycbxF4dytodtfMhzGJJTxSPrQTMYa63G1N1Ei3dK09RdG5eS0UKQFBU2lrvpS7OrFTEqX`,
    headers: { 'Content-Type': 'application/json' },
  })
};

const getMainApi = async () => {
  const responseSettings = await mainApi.instance.get('exec?endpoint=settings');
  const responsePrograms = await mainApi.instance.get('exec?endpoint=programs');

  return {
    settings: responseSettings.data,
    programs: responsePrograms.data,
  };
};

// Program API endpoint
const programApi = {
  'zakat': {
    file: 'GDrive/UPZ/microsite/01-zakat',
    instance: axios.create({
      baseURL: `${googleApi}...`,
      headers: { 'Content-Type': 'application/json' },
    })
  },
  'infaq': {
    file: 'GDrive/UPZ/microsite/02-infaq',
    instance: axios.create({
      baseURL: `${googleApi}...`,
      headers: { 'Content-Type': 'application/json' },
    })
  },
  'wakaf': {
    file: 'GDrive/UPZ/microsite/04-wakaf',
    instance: axios.create({
      baseURL: `${googleApi}...`,
      headers: { 'Content-Type': 'application/json' },
    })
  },
};

const getProgramData = async (program) => {
  const responseDetail = await programApi[program].instance.get('exec?endpoint=detail');
  const responseMuhsinin = await programApi[program].instance.get('exec?endpoint=muhsinin');
  const responseInfo = await programApi[program].instance.get('exec?endpoint=info');

  return {
    detail: responseDetail.data,
    muhsinin: responseMuhsinin.data,
    info: responseInfo.data,
  };
};

export default {
  getMainApi,
  getProgramData,
};
