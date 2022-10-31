import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import NotFound from '../pages/404'
import About from '../pages/About'
import Character from '../pages/Character'
import Characters from '../pages/Characters'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import AboutDetails from './AboutDetails'
import ProtectedRoute from './ProtectedRoute'

const Main = () => {
  const { isAuthenticated } = useAuth()
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='characters' element={<ProtectedRoute><Characters /></ProtectedRoute>} />
        <Route path='character/:id' element={<ProtectedRoute><Character /></ProtectedRoute>} />
        <Route path='about' element={<About />}>
          <Route index element={<h1>If You Can Read More About This Page And Its Creator Click On More Details </h1>} />
          <Route path='details' element={<AboutDetails />} />
        </Route>
        {
          isAuthenticated ? <Route path='logout' element={<Logout />} /> : <Route path='login' element={<Login />} />
        }

        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default Main
