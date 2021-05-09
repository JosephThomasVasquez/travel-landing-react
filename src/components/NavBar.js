import React, { useState } from "react";
import gsap from "gsap";

const NavBar = () => {
  const [menuState, setMenuState] = useState({
    initial: false,
    open: null,
    menuDisplay: "Menu",
  });

  // Toggle state of the menu
  const handleMenuClick = (e) => {
    console.log(e.target);

    // If menu initial: false, or if open: false i.e. "null" it will flip to true
    if (menuState.initial === false || !menuState.open) {
      setMenuState({ initial: null, open: true, menuDisplay: "Close" });
    }
    // If menu open: true, then flip to false
    if (menuState.open === true) {
      setMenuState({ open: !menuState.open, menuDisplay: "Menu" });
    }
    console.log("Menu", menuState.open);
  };

  return (
    <nav
      className="flex justify-between items-center h-14 py-4 bg-yellow-50 text-red-600 relative shadow-sm"
      role="navigation"
    >
      <div>
        <a
          href="/"
          className="text-red-600 inline-block p-4 hover:bg-yellow-100 transition-all duration-500 ease-in-out"
        >
          TravelRun
        </a>
      </div>
      <div className="pr-8 absolute inset-y-0 right-0 md:block hidden">
        <a
          href="/"
          className="text-red-600 inline-block p-4 hover:underline hover:bg-yellow-100 transition-all duration-500 ease-in-out"
        >
          Home
        </a>
        <a
          href="/features"
          className="text-red-600 inline-block p-4 hover:underline hover:bg-yellow-100 transition-all duration-500 ease-in-out"
        >
          Features
        </a>
        <a
          href="/experiences"
          className="text-red-600 inline-block p-4 hover:underline hover:bg-yellow-100 transition-all duration-500 ease-in-out"
        >
          Experiences
        </a>
        <a
          href="/contact"
          className="text-red-600 inline-block p-4 hover:underline hover:bg-yellow-100 transition-all duration-500 ease-in-out"
        >
          Contact
        </a>
      </div>

      <div
        className="p-4 cursor-pointer absolute inset-y-0 right-0 w-16 md:hidden hover:bg-yellow-100 transition-all duration-500 ease-in-out"
        onClick={handleMenuClick}
      >
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
