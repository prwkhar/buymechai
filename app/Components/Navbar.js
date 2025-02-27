import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-2 px-4 text-xl bg-blue-600'>
      <div className='font-bold'>Chai Buddy</div>
      <div>
        <ul className='flex space-x-2'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>SignIn</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
