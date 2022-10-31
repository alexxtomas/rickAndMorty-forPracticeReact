const setCharacters = (characters) => {
  window.localStorage.setItem('characters', JSON.stringify(characters))
}

const getCharacters = () => {
  const characters = window.localStorage.getItem('characters')
  return JSON.parse(characters)
}

const setUser = (username, password) => {
  window.localStorage.setItem('user', JSON.stringify({ username, password }))
}

const getUser = () => {
  const data = window.localStorage.getItem('user')
  if (!data) return undefined
  const user = JSON.parse(data)
  return user
}

const removeUser = () => {
  window.localStorage.removeItem('user')
}

export default { setCharacters, getCharacters, setUser, getUser, removeUser }
