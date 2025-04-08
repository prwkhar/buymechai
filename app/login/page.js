"use client";
import { useEffect,useState } from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false); // Track login flow

  useEffect(() => {
    if (loggingIn && status === "authenticated" && session) {
      console.log("Redirecting to:", session.user.name);
      router.push(`/${session.user.name}`);
    }
  }, [session, status, loggingIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      alert("🎉 Login successful!");
      setLoggingIn(true); // trigger useEffect when session updates
    } else {
      alert(res?.error || "Login failed.");
    }
  };

  if (session) {
    return (
      <div className="flex justify-center pt-25">
        <div className="w-full max-w-md flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
            Already Logged In
          </h1>
          <button
            onClick={() => signOut()}
            className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center pt-25">
      <div className="w-full max-w-md flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Log In
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>
          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline dark:text-blue-400"
            >
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account?{' '}
          <Link href="/signin" className="text-blue-500 hover:underline dark:text-blue-400">
            Sign up
          </Link>
        </div>
        <div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Or continue with
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            {[
              {
                src: "https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/",
                alt: "Google",
              },
              {
                src: "https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/",
                alt: "Github",
              },
            ].map((social, index) => (
              <button
                key={index}
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:scale-105 transition-transform"
                onClick={() => signIn(social.alt.toLowerCase())}
              >
                <img
                  className="w-6 h-6"
                  src={social.src}
                  alt={social.alt}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
