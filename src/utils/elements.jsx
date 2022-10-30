import AboutDetails from '../components/AboutDetails'
import ProtectedRoute from '../components/ProtectedRoute'
import NotFound from '../pages/404'
import About from '../pages/About'
import Character from '../pages/Character'
import Characters from '../pages/Characters'
import Home from '../pages/Home'
import Login from '../pages/Login'
export default [
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'characters',
    element:
  <ProtectedRoute>
    <Characters />
  </ProtectedRoute>
  },
  {
    path: 'character/:id',
    element:
  <ProtectedRoute>
    <Character />
  </ProtectedRoute>
  },
  {
    path: 'about',
    element: <About />,
    children: [
      {
        index: true,
        element: <h1>If You Can Read More About This Page And Its Creator Click On More Details </h1>
      },
      {
        path: 'details',
        element: <AboutDetails />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />

  }

]
