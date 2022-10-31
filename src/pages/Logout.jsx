import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Logout = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate('/login')
  }
  return (
    <>
      <button onClick={handleClick}>Logout</button>
    </>
  )
}

export default Logout
