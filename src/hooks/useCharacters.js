import { useEffect, useState } from 'react'
import rickAndMorty from '../services/rickAndMorty'
import localStorage from '../utils/localStorage'

export const useCharacters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    if (!localStorage.getCharacters()) {
      rickAndMorty.getAllCharacters()
        .then(data => {
          setCharacters(data)
          localStorage.setCharacters(data)
        })
    } else {
      setCharacters(localStorage.getCharacters())
    }
  }, [])

  return { characters }
}
