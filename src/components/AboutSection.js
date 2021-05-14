import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage1 from "../images/pexels-archie-binamira-672358.jpg";
import aboutImage2 from "../images/pexels-te-lensfix-1371360.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  let aboutColumn1 = useRef(null);
  let aboutColumn2 = useRef(null);

  const revealSections = useRef([]);
  revealSections.current = [];

  const addRefs = (el) => {
    if (el && !revealSections.current.includes(el)) {
      revealSections.current.push(el);
    }
    console.log(revealSections.current);
    console.log(aboutColumn1);
  };

  useEffect(() => {
    revealSections.current.forEach((el, index) => {
      if (index % 2 === 0) {
        gsap.fromTo(
          el,
          { x: -500, autoAlpha: 0 },
          {
            duration: 1.5,
            autoAlpha: 1,
            x: 0,
            ease: "power1.inOut",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=200",
              toggleActions: "play none none reverse",
            },
          }
        );
      } else {
        gsap.fromTo(
          el,
          { x: 500, autoAlpha: 0 },
          {
            duration: 1.5,
            autoAlpha: 1,
            x: 0,
            ease: "power1.inOut",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=200",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="">
      <div className="grid grid-rows-2 grid-cols-12 gap-8 w-screen">
        <div
          className="md:col-start-1 md:col-end-7 sm:col-span-12 ... h-96 h-auto"
          ref={addRefs}
        >
          <div className="block font-mono font-bold text-primary-orange lg:text-2xl md:text-5xl sm:text-3xl mb-8 pl-16 ">
            ABOUT US
          </div>
          <div className="block font-serif font-bold text-gray-800 lg:text-6xl md:text-5xl sm:text-3xl px-16">
            Explore All Corners Of The World With Us
          </div>
        </div>

        <div
          className="md:col-start-7 md:col-end-13 sm:col-span-12 ... bg-primary-orange-100 h-96 p-16 h-auto"
          ref={addRefs}
        >
          <div className="block font-bold text-gray-700 lg:text-2xl md:text-1xl sm:text-1xl mb-8 pl-8">
            We enjoy creating a variety of destinations and creating experience
            packages so customers can always find something new and exciting or
            just a change of view for relaxation.
          </div>
          <div className="block font-serif font-bold text-gray-800 lg:text-2xl md:text-2xl sm:text-2xl pl-8">
            <button className="font-semibold bg-primary-orange text-gray-100 inline-block p-6 px-10 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:col-start-1 md:col-end-7 sm:col-span-12 ...">
          <div className="" ref={addRefs}>
            <img src={aboutImage2} alt="" />
          </div>
        </div>

        <div
          className="md:col-start-7 md:col-end-13 sm:col-span-12 ... bg-sky-blue shadow-lg static"
          ref={addRefs}
        >
          <div className="rounded overflow-hidden">
            <img src={aboutImage1} alt="" className="object-cover" />
            <div className="relative bottom-32 bg-sky-blue">
              <div className="flex items-center justify-center font-bold font-serif text-8xl text-primary-orange bg-sky-blue rounded-full relative bottom-12 left-16 pt-6 w-24 h-24 shadow">
                <div className="mt-4">"</div>
              </div>
              <span className="font-bold text-4xl text-gray-700">
                The Green Mountains
              </span>
              <span className="block text-2xl text-gray-700">
                Explore the land of vast lush greenery and clear skies.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
