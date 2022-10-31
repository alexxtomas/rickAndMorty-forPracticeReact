import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { AuthProvider } from './context/AuthenticatedContext'
import { CharactersProvider } from './context/CharactersContext'

const App = () =>
  <>
    <AuthProvider>
      <Header />
      <CharactersProvider>
        <Main />
      </CharactersProvider>
    </AuthProvider>
  </>

export default App
