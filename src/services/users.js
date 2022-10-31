
const baseURL = 'http://localhost:3000/users'

const add = (username, password) =>
  fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(res => res)

const validate = async (userToValidate) => {
  const request = await fetch(baseURL)
  const users = await request.json()
  return users.find(user => (user.username === userToValidate.username) && (user.password === userToValidate.password))
}

export default { add, validate }
