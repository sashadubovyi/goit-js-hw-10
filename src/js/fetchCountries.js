export function fetchCountries(symbol) {
  const BASE_URL = 'https://restcountries.com/v3.1';
  const END_POINT = '/name';
  const PARAMS = `/${symbol}?fields=name,capital,population,flags,languages`;

  const url = BASE_URL + END_POINT + PARAMS;

  return fetch(url).then(res => res.json());
}
