import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connectDb from "@/db/connectDb"
import User from "@/app/models/User"
import bcrypt from "bcryptjs"

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await connectDb()
        const user = await User.findOne({ email: credentials.email })
        console.log("User found:", user)

        if (!user) {
          throw new Error("No user found")
        }

        const isValid = await bcrypt.compare(credentials.password, user.password)

        if (!isValid) {
          throw new Error("Invalid password")
        }

        return{
            name: user.name,
            email: user.email,
        }
      },
    }),
  ],

  callbacks: {
    async signup({ user, account }) {
      await connectDb()

      const existingUser = await User.findOne({ email: user.email })

      if (!existingUser && account?.provider !== "credentials") {
        // Only auto-create for OAuth (not email-password)
        await User.create({
          name: user.name || "No Name",
          email: user.email,
          image: user.image || null,
          provider: account.provider,
        })
      }

      return true
    },

    async session({ session }) {
      await connectDb()
      const user = await User.findOne({ email: session.user.email })
      session.user.id = user._id.toString()
      return session
    },
  },

  pages: {
    signIn: "/login", // your custom login page
  },

  secret: process.env.NEXTAUTH_SECRET,
})
export { handler as GET, handler as POST }
