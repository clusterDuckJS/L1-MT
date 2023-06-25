import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'

import Home from './Pages/Home/Home'
import SignIn from './Pages/SignUp/SignIn'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>

  )
}

export default App