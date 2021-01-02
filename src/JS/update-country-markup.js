import countryTpl from '../templates/countries.hbs';
import refs from './refs';

function updateCountryMarkup(country) {
    const markup = countryTpl(country);
    refs.countryContainer.insertAdjacentHTML('beforeend', markup);
    // console.log(country);
}

export default updateCountryMarkup;


