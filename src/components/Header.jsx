import NavBar from './Navbar'
import Title from './Title'
const Header = ({ elements }) =>
  <header>
    <Title className='title' content='Rick And Morty Fan Page' />
    <NavBar elements={elements} />
  </header>

export default Header
