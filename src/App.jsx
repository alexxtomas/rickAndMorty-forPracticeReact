import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

const App = () =>
  <>
    <Header elements={[{ text: 'Home', path: '/' }, { text: 'Characters', path: '/characters' }, { text: 'About', path: '/about' }]} />
    <main><Outlet /></main>
  </>

export default App
