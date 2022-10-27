// import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCharacters } from '../hooks/useCharacters'
const Character = () => {
  const { id } = useParams()
  const { characters: character } = useCharacters(id)

  const handleClick = (evt) => {
    // const { id: btnId } = evt.target
    // setCharacters(
  }

  if (!character) return <div className='error'>Character Not Found</div>
  return (
    <div className='character-details'>

      <h3>{character.name}</h3>
      <ul>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>Type: {character.type}</li>
        <li>Gender: {character.gender}</li>
        <li>Origin: {character.origin.name}</li>
        <li>Location: {character.location.name}</li>
      </ul>
      <img src={character.image} alt={character.name} />
      <button id={character.id} onClick={handleClick}>Delete</button>

    </div>
  )
}

export default Character
