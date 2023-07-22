import axios from 'axios';
import { fixRegions, removeDuplicates, transformCountriesData, transformCountryData } from 'helpers';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

export const getCountries = async () => {
  const { data } = await axios.get('/region/europe');
  const countries = transformCountriesData(data);

  return countries;
};

export const fetchCountry = async name => {
  const { data } = await axios.get(`/name/${name}`);
  const country = transformCountryData(data);

  return country[0];
};

export const fetchByRegion = async region => {
  const { data } = await axios.get(`/region/${region}`);
  const countries = transformCountriesData(data);

  return countries;
};

//https://restcountries.com/v3.1/independent?status=true&fields=region
export const fetchListRegion = async () => {
  const { data } = await axios.get(`/independent?status=true&fields=region`);

  const regions = removeDuplicates(data, 'region');
  const fullRegions = fixRegions(regions);

  return fullRegions;
};
