import { useContext } from 'react'
import { Context as AuthContext } from '../context/AuthenticatedContext'
export const useAuth = () => useContext(AuthContext)
