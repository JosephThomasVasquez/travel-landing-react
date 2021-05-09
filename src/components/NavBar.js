import React from "react";

const NavBar = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-yellow-50 text-red-600 relative shadow-sm"
      role="navigation"
    >
      <div className="pr-8 md:block hidden">
        <a href="/" className="text-red-600 inline-block p-4 hover:underline">
          TravelRun
        </a>

        <a href="/" className="text-red-600 inline-block p-4 hover:underline">
          Home
        </a>

        <a href="/" className="text-red-600 inline-block p-4 hover:underline">
          Features
        </a>

        <a href="/" className="text-red-600 inline-block p-4 hover:underline">
          Experiences
        </a>

        <a href="/" className="text-red-600 inline-block p-4 hover:underline">
          Contact
        </a>
      </div>
      <div className="pl-4 cursor-pointer flex flex-row space-x-6 md:hidden">
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
    </nav>
  );
};

export default NavBar;
