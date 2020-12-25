function fetchCountry(searchQwery) {
    const url = 'https://restcountries.eu/rest/v2/name/${searchQwery}';
  
   return fetch(url)
        .then(response => response.json())
        // .then(deta => deta.country)
}

export default fetchCountry;