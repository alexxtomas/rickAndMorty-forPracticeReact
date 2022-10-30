import { Outlet } from 'react-router-dom'
import CharactersList from '../components/CharactersList'

const Characters = () => {
  return (
    <>
      <h2>Characters</h2>
      <Outlet />
      <CharactersList />

    </>

  )
}

export default Characters
