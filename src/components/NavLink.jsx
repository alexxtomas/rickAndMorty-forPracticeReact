import { NavLink as NavLinkReactRouter } from 'react-router-dom'
const NavLink = ({ to, className, children, ...props }) =>
  <NavLinkReactRouter {...props} to={to} className={({ isActive }) => isActive ? 'is-active' : undefined} end>
    {children}
  </NavLinkReactRouter>
export default NavLink
