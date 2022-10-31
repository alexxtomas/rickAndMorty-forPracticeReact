import { createContext, useState } from 'react'

export const Context = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!window.localStorage.getItem('logged'))

  const login = () => {
    setIsAuthenticated(true)
    window.localStorage.setItem('logged', 'true')
  }

  const logout = () => {
    setIsAuthenticated(false)
    window.localStorage.clear()
  }

  return (
    <Context.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </Context.Provider>
  )
}
