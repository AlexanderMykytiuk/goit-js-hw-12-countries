function fetchCountry(searchQwery) {
    const url = 'https://restcountries.eu/rest/v2/name/';
  
   return fetch(`${url}${searchQwery}`)
        .then(response => response.json())
        .catch(error => console.log(error));
        // .then(deta => deta.country)
}

export default fetchCountry;



