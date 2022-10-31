import { createContext, useEffect, useState } from 'react'
import ShowError from '../components/ShowError'
import users from '../services/users'
import localStorage from '../utils/localStorage'

export const Context = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    (async () => {
      const userFromLocalStorage = localStorage.getUser()
      if (userFromLocalStorage) {
        const isAValidUser = await users.validate(userFromLocalStorage)
        if (isAValidUser) setIsAuthenticated(true)
      }
    })()
  }, [])

  const login = async (username, password) => {
    const loggedUser = await users.validate({ username, password })
    if (!loggedUser) return <ShowError errMessage='Wrong username or password, please try again' />
    setIsAuthenticated(true)
    localStorage.setUser(username, password)
    return loggedUser
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeUser()
  }

  return (
    <Context.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </Context.Provider>
  )
}
