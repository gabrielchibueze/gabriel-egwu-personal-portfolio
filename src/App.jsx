import { useState } from 'react'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contactme from './Pages/Contactme'
import Blog from './Pages/News'
import FutureWork from './Pages/Future-work'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='projects' element={<Projects />}/>
            <Route path='blog' element={<Blog />}/>
            <Route path='contactme' element={<Contactme />}/>
            <Route path='futurework' element={<FutureWork />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
