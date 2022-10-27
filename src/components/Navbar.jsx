import NavElements from './NavElements'
const NavBar = ({ elements }) =>
  <nav>
    <ul>
      <NavElements elements={elements} />
    </ul>
  </nav>

export default NavBar
