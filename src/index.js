import './styles.css';
var debounce = require('lodash.debounce');
import fetchCountry from './JS/fetch-countries';
import updateCountryMarkup from './JS/update-country-markup';
import refs from './JS/refs';

//  refs.countrySearch.addEventListener('input', event => {
//   event.preventDefault();

//   const form = event.currentTarget;
//   const inputValue = form.elements.query.value;

//   refs.countryContainer.innerHTML = '';
  
//   fetchCountry(inputValue).then(updateCountryMarkup);
// });

//   https://restcountries.eu/rest/v2/all?fields=name;capital;currencies


  const debounceInput = debounce(event => {
  event.preventDefault();

  const inputValue = event.target.value;

  refs.countryContainer.innerHTML = '';
  
  fetchCountry(inputValue).then(updateCountryMarkup);
}, 1000);

refs.countrySearch.addEventListener('input', debounceInput);