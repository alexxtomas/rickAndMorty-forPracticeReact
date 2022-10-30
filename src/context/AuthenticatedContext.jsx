import { createContext, useState } from 'react'
import localStorage from '../utils/localStorage'

export const Context = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (localStorage.getUser()) setIsAuthenticated(true)

  const login = (user) => {
    setIsAuthenticated(true)
    localStorage.setUser(user)
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
