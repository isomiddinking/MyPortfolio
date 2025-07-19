import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Head from './Components/Head_page/Head'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Contacts from './Components/Contact/Contact'
import Media_sidebar from './Components/Responsive/Sidebar/Media_sidebar'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Head />} />
        <Route path="/sidebar" element={<Media_sidebar />} />
        <Route path="/haqida" element={<About />} />
        <Route path='/loyihalar' element={<Project/>}/>
        <Route path='/boglanish' element={<Contacts/>}/>
      </Routes>
    </div>
  )
}

export default App
