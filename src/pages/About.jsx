import { Link, Outlet } from 'react-router-dom'

const About = () =>
  <>
    <p className='about'>
      Made With ♥️ <a href='https://www.linkedin.com/in/alex-tomas--/' target='_blank' rel='noreferrer'>Alex</a> to practice react-dom@6 and learn how to use useRef
      <Link to='details'> more details</Link>
    </p>
    <Outlet />
  </>

export default About
