"use client";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center pt-25">
      <div className="w-full max-w-md flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Log In
        </h1>
        <form action="#" method="post" className="space-y-5">
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
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline dark:text-blue-400">
            Sign up
          </a>
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
                src: "https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/",
                alt: "Linkedin",
              },
              {
                src: "https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/",
                alt: "Github",
              },
              {
                src: "https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/",
                alt: "Facebook",
              },
              {
                src: "https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/",
                alt: "Twitter",
              },
              {
                src: "https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/",
                alt: "Apple",
              },
            ].map((social, index) => (
              <button
                key={index}
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:scale-105 transition-transform"
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
