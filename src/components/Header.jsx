import { useAuth } from '../hooks/useAuth'
import NavBar from './Navbar'
import Title from './Title'
const Header = () => {
  const { isAuthenticated } = useAuth()

  // REFACTOR NEEDED
  const elements = [{ text: 'Home', path: '/' },
    { text: 'Characters', path: '/characters' },
    { text: 'About', path: '/about' },
    isAuthenticated ? { text: 'Logout', path: '/logout' } : { text: 'Login', path: '/login' }

  ]

  return (
    <header>
      <Title className='title' content='Rick And Morty Fan Page' />
      <NavBar elements={elements} />
    </header>
  )
}

export default Header
