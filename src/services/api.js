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

// TODO: extract getMainApi to separate getSettings and getProgramsList
// Cache getProgramsList if possible, use getSettings.version to invalidate cache

const getMainApi = async () => {
  const responseSettings = await mainApi.instance.get('exec?endpoint=settings');
  const responsePrograms = await mainApi.instance.get('exec?endpoint=programs');

  const programsList = responsePrograms.data.filter(program => program.id !== '');

  return {
    settings: responseSettings.data,
    programs: programsList,
  };
};

// Program API endpoint
const programApi = {
  'zakat': {
    file: 'GDrive/UPZ/microsite/01-zakat',
    instance: axios.create({
      baseURL: `${googleApi}AKfycbwBT_-eX5f8s9IAUReRqdHNAkK4eV3GDelke1UIEDh0zhDXtRww4SOvdxAn1fYEFnvnQA`,
      headers: { 'Content-Type': 'application/json' },
    })
  },
  // 'infaq': {
  //   file: 'GDrive/UPZ/microsite/02-infaq',
  //   instance: axios.create({
  //     baseURL: `${googleApi}...`,
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  // },
  // 'wakaf': {
  //   file: 'GDrive/UPZ/microsite/04-wakaf',
  //   instance: axios.create({
  //     baseURL: `${googleApi}...`,
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  // },
};

const getProgramData = async (codename) => {
  const responseDetail = await programApi[codename].instance.get('exec?endpoint=detail');
  const responseMuhsinin = await programApi[codename].instance.get('exec?endpoint=muhsinin');
  const responseInfo = await programApi[codename].instance.get('exec?endpoint=info');

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
