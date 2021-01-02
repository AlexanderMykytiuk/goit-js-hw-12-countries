const refs = {
  countrySearch: document.querySelector('.js-search-form'),
  countryContainer: document.querySelector('.js-country')
}

export default refs;





// refs.searchCountry.addEventListener('input', debounce(searchCountryHandler, 500))

// function searchCountryHandler(event) {
//   event.preventDefault()
//     const inputValue = event.target.value;
//     // console.log(event.target.value);

//      conditions(inputValue)

// }


// function conditions(inputCountry) {
//  if (inputCountry.length > 0) {
//         //сбрасываем содержимое контейнера
//         refs.countryContainer.innerHTML = "";

//         // получаем promise
//         fetchCountries(inputCountry).then(data => {

//             if (data.length > 10) {

//                 error({
//                     text: 'Too many matches found. Please enter a more specific query!'
//                 });
            
//             }
//             else if (data.length <= 10 && data.length >= 2) {
                
//                 const countries = data.map(country =>
//                     `<li class="list-items">${country.name}</li>`
//                 );
//                 const country = countries.join(" ")
               
//                 refs.countryContainer.innerHTML = country;
//                 // console.log(countries);
     
//             }
//             else if (data.length === 1) {
//                 (updateCountriesMarcup(data))
//             }
//             else {
//                 error({
//                     text: 'Please enter a valid country name! '
//                 });
//             }
     
//         })
//     }
// }