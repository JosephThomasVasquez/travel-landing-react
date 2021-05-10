import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const NavBar = () => {
  const [menuState, setMenuState] = useState({
    initial: false,
    open: null,
    menuDisplay: "Menu",
  });

  // Open the Menu
  const menuShow = (elem1, elem2) => {
    gsap.from([elem1, elem2], {
      duration: 0.25,
      height: 0,
      transformOrigin: "right top",
      ease: "power4.inOut",
      stagger: {
        amount: 0.25,
      },
    });
  };

  // Hide the Menu
  const menuHide = (elem1, elem2) => {
    gsap.to([elem1, elem2], {
      duration: 0.25,
      height: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 0.07,
      },
    });
  };

  // Stagger links from Menu
  const staggerLinks = (elem1, elem2, elem3, elem4, elem5) => {
    gsap.from([elem1, elem2, elem3, elem4, elem5], {
      duration: 0.15,
      y: 100,
      delay: 0.25,
      ease: "power4.inOut",
      stagger: {
        amount: 0.25,
      },
    });
  };

  let menuButton = useRef(null);
  let menuBegin = useRef(null);
  let menuEnd = useRef(null);
  let menuLink1 = useRef(null);
  let menuLink2 = useRef(null);
  let menuLink3 = useRef(null);
  let menuLink4 = useRef(null);
  let menuLink5 = useRef(null);

  useEffect(() => {
    // If menu initial: false, or if open: false i.e. "null" it will flip to true
    if (menuState.open === false || menuState.initial === false) {
      menuHide(menuBegin, menuEnd);
      gsap.to(menuButton, { duration: 0, css: { display: "none" } });
      gsap.to([menuEnd, menuBegin], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
    } else if (
      menuState.open === true ||
      (menuState.open === true && menuState.initial === null)
    ) {
      gsap.to(menuButton, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([menuBegin, menuEnd], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      menuShow(menuBegin, menuEnd);
      staggerLinks(menuLink1, menuLink2, menuLink3, menuLink4, menuLink5);
    }
  }, [menuState]);

  // Toggle state of the menu
  const handleMenuClick = () => {
    // If menu initial: false, or if open: false i.e. "null" it will flip to true
    if (menuState.initial === false || !menuState.open) {
      setMenuState({ initial: null, open: true, menuDisplay: "Close" });
    }
    // If menu open: true, then flip to false
    if (menuState.open === true) {
      setMenuState({ open: !menuState.open, menuDisplay: "Menu" });
    }
    // console.log("Menu", menuState.open);
  };

  return (
    <nav
      className="flex justify-between items-center h-24 bg-sky-blue text-primary-orange relative"
      role="navigation"
    >
      <div>
        <a
          href="/"
          className="font-semibold text-3xl text-primary-orange inline-block ml-10 p-4 hover:bg-yellow-100 transition-all duration-500 ease-in-out"
        >
          TravelRun
        </a>
      </div>
      <div className="pr-8 mr-10 absolute inset-y-0 right-0 md:block hidden">
        <a
          href="/"
          className="font-semibold text-gray-800 inline-block mt-7 p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out"
        >
          Home
        </a>
        <a
          href="/features"
          className="font-semibold text-gray-800 inline-block mt-7 p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out"
        >
          Features
        </a>
        <a
          href="/experiences"
          className="font-semibold text-gray-800 inline-block mt-7 p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out"
        >
          Experiences
        </a>
        <a
          href="/contact"
          className="font-semibold text-gray-800 inline-block mt-7 p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out"
        >
          Contact
        </a>
        <a
          href="/contact"
          className="font-semibold bg-primary-orange text-gray-100 inline-block mt-7 ml-5 p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out"
        >
          Login
        </a>
      </div>

      <div
        className="mt-4 p-4 px-5 cursor-pointer absolute p-5 inset-y-0 right-0 w-16 md:hidden hover:bg-yellow-100 transition-all duration-500 ease-in-out"
        onClick={handleMenuClick}
      >
        <div ref={(el) => (menuButton = el)} className="menu-wrapper">
          <div
            ref={(el) => (menuBegin = el)}
            className="bg-red-500 w-full"
          ></div>
          <div
            ref={(el) => (menuEnd = el)}
            className="bg-sky-blue mt-20 absolute inset-y-0 right-0 w-screen"
          >
            <a
              ref={(el) => (menuLink1 = el)}
              href="/"
              className="bg-sky-blue font-semibold text-center text-gray-800 block p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out"
            >
              Home
            </a>
            <a
              ref={(el) => (menuLink2 = el)}
              href="/features"
              className="bg-sky-blue font-semibold text-center text-gray-800 block p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out"
            >
              Features
            </a>
            <a
              ref={(el) => (menuLink3 = el)}
              href="/experiences"
              className="bg-sky-blue font-semibold text-center text-gray-800 block p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out"
            >
              Experiences
            </a>
            <a
              ref={(el) => (menuLink4 = el)}
              href="/contact"
              className="bg-sky-blue font-semibold text-center text-gray-800 block p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out"
            >
              Contact
            </a>
            <a
              ref={(el) => (menuLink5 = el)}
              href="/contact"
              className="bg-sky-blue font-semibold text-center bg-primary-orange text-gray-100 block p-2 px-5 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out"
            >
              Login
            </a>
          </div>
        </div>
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
