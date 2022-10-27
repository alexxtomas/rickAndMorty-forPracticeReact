import { useEffect, useState } from 'react'
import rickAndMorty from '../services/rickAndMorty'

export const useCharacters = (id) => {
  const [characters, setCharacters] = useState(id ? null : [])
  const [loading, setLoading] = useState(false)

  const request = id ? rickAndMorty.getCharacterById(id) : rickAndMorty.getAllCharacters()

  useEffect(() => {
    setLoading(true)
    request
      .then(data => {
        setCharacters(data)
        setLoading(false)
      })
  }, [])

  return { characters, loading, setCharacters }
}
