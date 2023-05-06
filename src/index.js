import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import { DEBOUNCE_DELAY } from './js/refs';
import { renderCountryCard } from './js/render';
import { renderCountryList } from './js/render';

refs.input.addEventListener(
  'input',
  debounce(evt => {
    const searchCountrys = evt.target.value.trim();

    if (!searchCountrys) {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';
      return;
    }

    fetchCountries(searchCountrys)
      .then(data => {
        if (data.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (data.length > 1) {
          refs.countryInfo.innerHTML = '';
          refs.countryList.innerHTML = renderCountryList(data);
        } else {
          refs.countryList.innerHTML = '';
          refs.countryInfo.innerHTML = renderCountryCard(data);
        }
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      });
  }, DEBOUNCE_DELAY)
);
