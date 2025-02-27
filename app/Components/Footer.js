import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm w-full dark:bg-gray-800 absolute bottom-0 ">
      <div className="w-full mx-auto max-w-screen-xl py-2 px-4 flex justify-between">
        <span className="text-sm  text-gray-500 text-center dark:text-gray-400">
          © 2025 Developer-Prakhar Agarwal{" "}
          <a href="https://github.com/prwkhar" className="hover:underline">
            Github
          </a>
          </span>
          <div className="text-sm  text-gray-500 text-center dark:text-gray-400">All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
