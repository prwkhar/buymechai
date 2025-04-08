// app/api/auth/signup/route.js
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import connectDb from '@/db/connectDb'
import User from '@/app/models/User'

export async function POST(req) {
  try {
    await connectDb()

    const { name, email, password } = await req.json()
    console.log('Received data:', { name, email, password })

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    return NextResponse.json({ message: 'User registered successfully!', user }, { status: 201 })
  } catch (error) {
    console.error('Signup Error:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
