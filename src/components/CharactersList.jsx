// import { useEffect, useState } from 'react'
// import rickAndMorty from '../services/rickAndMorty'
import { useCharacters } from '../hooks/useCharacters'
import CharacterCard from './CharacterCard'
import Loading from './Loading'

const CharactersList = () => {
  const { characters, loading } = useCharacters()

  if (loading) <Loading />

  return (
    <div className='characters-container'>
      {characters.map(({ name, id, image }) => <CharacterCard key={id} name={name} id={id} image={image} />)}
    </div>
  )
}

export default CharactersList
