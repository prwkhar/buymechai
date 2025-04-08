'use client'
import React, { use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function page() {
const router = useRouter();
  const handleSignIn = async (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
    const { name, email, password } = data

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      const result = await res.json()
      if (res.ok) {
        alert('User registered successfully! 🎉')
        // Redirect to login page or perform any other action
        router.push('/login');
      } else {
        alert(result.message)
      }
    } catch (err) {
      console.error('Error:', err)
      alert('Something went wrong!')
    }
  }

  return (
    <div className="flex justify-center pt-25">
      <div className="w-full max-w-md flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Log In
        </h1>
        <form className="space-y-5" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-white dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="name"
              placeholder="Your full name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline dark:text-blue-400">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
