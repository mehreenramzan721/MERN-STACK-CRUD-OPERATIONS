import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

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
