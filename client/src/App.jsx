import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users.jsx'
import CreateUser from './CreateUser.jsx'
import UpdateUser from './UpdateUser.jsx'

function App() {

  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update' element={<UpdateUser/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
   
  )
}

export default App
