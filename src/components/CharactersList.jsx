import { useCharacters } from '../hooks/useCharacters'
import CharacterCard from './CharacterCard'

const CharactersList = () => {
  const { characters } = useCharacters()

  return (
    <div className='characters-container'>
      {characters.map(({ name, id, image }) => <CharacterCard key={id} name={name} id={id} image={image} />)}
    </div>
  )
}

export default CharactersList
