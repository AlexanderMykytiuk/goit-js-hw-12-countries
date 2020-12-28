import './styles.css';
import fetchCountry from './JS/fetch-countries';
import updateCountryMarkup from './JS/update-country-markup';
import refs from './JS/refs';

 refs.countrySearch.addEventListener('input', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  refs.countryContainer.innerHTML = '';
  
  fetchCountry(inputValue).then(updateCountryMarkup);
});

//   https://restcountries.eu/rest/v2/all?fields=name;capital;currencies


//   const debounceInput = _.debounce(event => {
//   event.preventDefault();

//   const form = event.currentTarget;
//   const inputValue = form.elements.query.value;

//   refs.countryContainer.innerHTML = '';
  
//   fetchCountry(inputValue).then(updateCountryMarkup);
// }, 1000);

// refs.countrySearch.addEventListener('input', debounceInput);