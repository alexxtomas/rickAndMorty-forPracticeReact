import { v4 as uuid } from 'uuid'
import NavLink from './NavLink'

const NavElements = ({ elements = [{ text: 'default', path: '/default' }] }) =>
  elements.map(({ text, path }) =>
    <li key={uuid()}>
      <NavLink to={path}>{text}
      </NavLink>
    </li>)

export default NavElements
