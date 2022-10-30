
const baseURL = 'https://rickandmortyapi.com/api/character'

const getAllCharacters = () =>
  fetch(baseURL)
    .then(res => res.json())
    .then(json => json?.results)
    .catch(e => e)

const getCharacterById = (id) =>
  fetch(`${baseURL}/${id}`)
    .then(res => res.json())
    .then(json => json)
    .catch(e => e)

export default { getAllCharacters, getCharacterById }
