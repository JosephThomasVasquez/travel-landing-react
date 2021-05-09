import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <ul className="pl-8">
          <a href="/" className="text-red-600 inline-block p-4">
            TravelRun
          </a>
          <li className="text-red-600 inline-block p-4">
            <a href="/">Home</a>
          </li>
          <li className="text-red-600 inline-block p-4">
            <a href="/">Features</a>
          </li>
          <li className="text-red-600 inline-block p-4">
            <a href="/">Experiences</a>
          </li>
          <li className="text-red-600 inline-block p-4">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
