import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { AuthProvider } from './context/AuthenticatedContext'
import { CharactersProvider } from './context/CharactersContext'

import navPaths from './utils/navPaths'

const App = () =>
  <>
    <Header elements={navPaths} />
    <AuthProvider>
      <CharactersProvider>
        <Main />
      </CharactersProvider>
    </AuthProvider>
  </>

export default App
