const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

// primera peticion cuanto personales
// el llamado del primer elemento nombre personaje
// del personaje traer la dimension

fetchData(API)
  .then(data => {
    console.log(data.info.count)
    return fetchData(`${API}${data.results[0].id}`)
  })
  .then(data => {
    console.log(data.name)
    return fetchData(data.origin.url)
  })
  .then(data => {
    console.log(data.dimension)
  })
  .catch(err => console.log(err))