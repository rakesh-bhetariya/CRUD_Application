import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='h-[80px] bg-gray-900 text-white'>
        <div className='flex items-center justify-between w-10/12 h-full mx-auto'>
          <div className='text-xl'>
            <h1>CURD Application</h1>
          </div>
          <div className='flex gap-8 text-lg'>
            <Link to = "/" className='hover:text-yellow-700 hover:font-bold'>
              <button>Home</button>
            </Link>
            <Link to= "/about" className='hover:text-yellow-700 hover:font-bold'>
              <button>About Us</button>
            </Link>
            <Link className='hover:text-yellow-700 hover:font-bold'>
              <button>Contact</button>
            </Link>
          </div>
          <div>
            <Link to="form">
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Create Profile
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
