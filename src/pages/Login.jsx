import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleClick = () => {
    login()
    navigate(state ? state.pathname : '/')
  }

  return (
    <>

      <button onClick={handleClick}>Login</button>
    </>
  )
}

export default Login
