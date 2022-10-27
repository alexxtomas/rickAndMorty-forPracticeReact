import { Link } from 'react-router-dom'
import { randomNumber } from '../utils/randomNumber'

const Home = () => {
  const id = randomNumber(826)
  return (
    <>
      <p className='home-parraf'>In this website you could see all the info about Rick and Morty characters, click down to see a random character  </p>
      <Link to={`/characters/${id}`}>Random Character</Link>
    </>
  )
}

export default Home
