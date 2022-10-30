
const setCharacters = (characters) => {
  window.localStorage.setItem('characters', JSON.stringify(characters))
}

const getCharacters = () => {
  const characters = window.localStorage.getItem('characters')
  return JSON.parse(characters)
}

const setUser = (user) => {
  window.localStorage.setItem('user', JSON.stringify(user))
}

const getUser = () => {
  const user = window.localStorage.getItem('user')
  return JSON.parse(user)
}

const removeUser = () => {
  window.localStorage.removeItem('user')
}

export default { setCharacters, getCharacters, setUser, getUser, removeUser }
