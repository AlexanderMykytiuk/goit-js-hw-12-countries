import './styles.css';
import fetchCountry from './JS/fetch-countries';
import updateCountryMarkup from './JS/update-country-markup';
import refs from './JS/refs';

var debounce = require('lodash.debounce');

import { alert, notice, info, success, error } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";


function searchCountry(event) {
  event.preventDefault();
  const inputValue = event.target.value;
  searchResult(inputValue)
}

function searchResult(inputText) {
  if (inputText.length > 0) {
    refs.countryContainer.innerHTML = ''; 

    fetchCountry(inputText).then(country => {
      if (country.length > 10) {
        info({ text: 'Too many matches found. Please enter a more specific query!' });

      } else if (country.length <= 10 && country.length >= 2) {
        const countries = country.map(count => `<li class="list-items">${count.name}</li>`);
        const countryList = countries.join(" ")
        refs.countryContainer.innerHTML = countryList;

      } else if (country.length === 1) {
        (updateCountryMarkup(country))

      } else {
        error({text: 'Please enter a valid country name!'});
      }
    })
  }
}
  
refs.countrySearch.addEventListener('input', debounce(searchCountry, 500));
  