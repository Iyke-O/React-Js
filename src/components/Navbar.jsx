import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-gray-800 text-white px-10 py-4 rounded-b-md text-lg font-semibold italic'>
        <ul className='flex items-center gap-12'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>

        <Button />
    </nav>
  )
}

export default Navbar