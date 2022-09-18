import React from "react";
export default function Footer() {
  return (
    <footer className="mt-10 p-4 rounded-t-lg shadow md:px-6 md:py-8 bg-gray-900">
      {/* <footer class="p-4 rounded-t-lg shadow md:px-6 md:py-8 bg-gradient-to-t from-black to-[#291313] "> */}

      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <img
            src="Edugate-logo-white-min.png"
            className="mr-3 h-10"
            alt="Edugate Logo"
          />
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="/" className="hover:underline">
          Edugate™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
