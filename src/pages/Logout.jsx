import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import localStorage from '../utils/localStorage'

const Logout = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const handleClick = () => {
    localStorage.removeUser()
    logout()
    navigate('/')
  }
  return (
    <>
      <button onClick={handleClick}>Logout</button>
    </>
  )
}

export default Logout
