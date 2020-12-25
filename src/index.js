
const url = 'https://restcountries.eu/rest/v2/name/ukrain';


fetch(url)
  .then(response => response.json())
  .then(country => console.log(country));

//   https://restcountries.eu/rest/v2/all?fields=name;capital;currencies