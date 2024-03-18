import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-cyan-400 justify-around h-[100px] items-center'>
        <h1 className='text-5xl font-sans font-bold text-white drop-shadow-xl shadow-gray-900'>Orion Devs</h1>
        <ul className='flex justify-end gap-5'>
            <p className='text-3xl text-white font-medium'><Link to="/">Home</Link></p>
            <p className='text-3xl text-white font-medium'><Link to='/dashboard'>Dashboard</Link></p>
            <p className='text-3xl text-white font-medium'><Link to='/leaderboard'>Leaderboard</Link></p>
        </ul>
    </div>
  )
}

export default Navbar