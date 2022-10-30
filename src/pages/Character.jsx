import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CharactersContext } from '../context/CharactersContext'
import rickAndMorty from '../services/rickAndMorty'
const Character = () => {
  const { id } = useParams()
  const { characters } = useContext(CharactersContext)

  let character = characters?.find(character => character.id === Number(id))

  useEffect(() => {
    if (!character) {
      rickAndMorty.getCharacterById(id)
        .then(data => {
          character = data
        })
        .catch(e => e)
    }
  })

  if (!character) return <h1>Error Character Not Found</h1>

  return (
    <div className='character-details'>

      <h3>{character.name}</h3>
      <ul>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>Gender: {character.gender}</li>
        <li>Origin: {character.origin.name}</li>
        <li>Location: {character.location.name}</li>
      </ul>
      <img src={character.image} alt={character.name} />

    </div>
  )
}

export default Character
