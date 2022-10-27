import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import ErrorHandler from './components/ErrorHandler'
import './index.css'
import About from './pages/About'
import Character from './pages/Character'
import Characters from './pages/Characters'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='characters' element={<Characters />} />
          <Route path='characters/:id' element={<Character />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<ErrorHandler errCode='404' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
