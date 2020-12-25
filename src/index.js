import countryTpl from './templates/countries.hbs';
import fetchCountry from './JS/fetchCountries';

const refs = {
  countryContainer: document.querySelector('.js-country'),
  countrySearch: document.querySelector('.js-search-form'),
}

  refs.countrySearch.addEventListener('input', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  refs.countryContainer.innerHTML = '';
  fetchCountry(inputValue).then(updateCountryMarkup);
  
});

function updateCountryMarkup(country) {
   const markup = countryTpl(country);
    refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

//   https://restcountries.eu/rest/v2/all?fields=name;capital;currencies