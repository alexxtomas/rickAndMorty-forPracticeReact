import axios from 'axios'

const baseURL = 'https://rickandmortyapi.com/api/character'

const getAllCharacters = async () => {
  const { data } = await axios.get(`${baseURL}`)
  return data?.results
}

const getCharacterById = async (id) => {
  try {
    const { data } = await axios.get(`${baseURL}/${id}`)
    return data
  } catch (e) {
    throw new Error('Character Not Found')
  }
}

export default { getAllCharacters, getCharacterById }
