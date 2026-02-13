import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './Pages/CreatePost'
import Feed from './Pages/feed'
import axios from "axios";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<CreatePost/>}/>
          <Route path = "/create-post" element={<CreatePost/>}/>
          <Route path = "/feed" element={<Feed/>}/>
        </Routes>
      </Router>

      
    </>
  )
}

export default App

