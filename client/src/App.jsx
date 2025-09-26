import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/auth/SignUpPage.jsx'
import SignInPage from './pages/auth/SignInPage.jsx'
import Home from './pages/Home.jsx'


const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={ <SignUpPage /> } />
      <Route path='/signin' element={ <SignInPage /> } />

      <Route path='/home' element={ <Home /> } />
    </Routes>
  )
}

export default App
