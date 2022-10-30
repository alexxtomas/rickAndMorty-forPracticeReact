import { useRoutes } from 'react-router-dom'
import Routes from '../utils/elements'

const Main = () => {
  const elements = useRoutes(Routes)
  return (
    <main>
      {elements}
    </main>
  )
}

export default Main
