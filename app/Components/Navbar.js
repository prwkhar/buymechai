import React from 'react'
import Link from 'next/link'
import Login from '../login/page'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-2 px-4 text-xl bg-white shadow-sm w-full dark:bg-gray-800 '>
      <div className='font-bold'>Chai Buddy</div>
      <div className=' flex items-center'>
        <ul className='flex space-x-2 text-sm'>
          {/* <li><Link>Home</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Contact</Link></li>
          <li><Link>SignIn</Link></li> */}
          <li><Link href="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
