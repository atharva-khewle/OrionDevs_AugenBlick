import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import DashBoard from './pages/Dashboard'
import Leaderboards from './components/LeaderBoard'

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/lb" element={<Leaderboards/>} />
      <Route path="/dashboard" element={<DashBoard></DashBoard>} />
        </Routes>
    </Router>

  )
}




export default App
