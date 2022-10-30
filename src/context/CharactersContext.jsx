import { createContext } from 'react'
import { useCharacters } from '../hooks/useCharacters'
export const CharactersContext = createContext()

export const CharactersProvider = ({ children }) => {
  const { characters } = useCharacters()
  return (
    <CharactersContext.Provider value={{ characters }}>
      {children}
    </CharactersContext.Provider>
  )
}
