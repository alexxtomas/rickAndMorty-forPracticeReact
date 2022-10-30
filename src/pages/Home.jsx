import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CharactersContext } from '../context/CharactersContext'
import { randomNumber } from '../utils/randomNumber'

const Home = () => {
  const { characters } = useContext(CharactersContext)
  const id = randomNumber(characters.length)
  return (
    <>
      <p className='home-parraf'>In this website you could see all the info about Rick and Morty characters, click down to see a random character  </p>
      <Link to={`/character/${id}`}>Random Character</Link>
    </>
  )
}

export default Home
