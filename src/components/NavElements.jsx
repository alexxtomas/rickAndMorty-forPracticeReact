import { NavLink } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const NavElements = ({ elements = [{ text: 'default', path: '/default' }] }) => elements.map(({ text, path }) => <li key={uuid()}><NavLink to={path}>{text}</NavLink></li>)

export default NavElements
