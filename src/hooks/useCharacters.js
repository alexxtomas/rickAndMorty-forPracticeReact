import { useEffect, useState } from 'react'
import rickAndMorty from '../services/rickAndMorty'

export const useCharacters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    if (!window.localStorage.getItem('characters')) {
      rickAndMorty.getAllCharacters()
        .then(data => {
          setCharacters(data)
          window.localStorage.setItem('characters', JSON.stringify(data))
        })
    } else {
      const data = window.localStorage.getItem('characters')
      setCharacters(JSON.parse(data))
    }
  }, [])

  return { characters }
}
