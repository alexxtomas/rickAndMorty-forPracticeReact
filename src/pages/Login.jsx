import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await login(username, password)
    navigate(state ? state.pathname : '/')
  }
  const inlineStyle = {
    display: 'block',
    width: '500px',
    height: '30px'

  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(evt) => setUsername(evt.target.value)} type='text' required placeholder='username' autoComplete='none' style={inlineStyle} />
      <input value={password} onChange={(evt) => setPassword(evt.target.value)} type='password' required placeholder='password' style={inlineStyle} />
      <button style={inlineStyle}>Login</button>
    </form>
  )
}

export default Login
