import React from "react";

const AboutSection = () => {
  return (
    <section className="grid grid-rows-2 grid-cols-6 grid-flow-col gap-4 pt-32">
      <div className="row-span-1 col-span-6 bg-gray-200 h-96 block font-serif font-bold text-gray-800 lg:text-6xl md:text-5xl sm:text-3xl">
        <div className="block font-mono font-bold text-primary-orange lg:text-2xl md:text-5xl sm:text-3xl mb-8 pl-8">
          ABOUT US
        </div>
        <div className="block font-serif font-bold text-gray-800 lg:text-6xl md:text-5xl sm:text-3xl pl-8">
          Explore All Corners Of The World With Us
        </div>
      </div>
      <div className="row-span-1 col-span-6 bg-primary-orange-100 h-96 block font-serif font-bold text-gray-800 lg:text-6xl md:text-5xl sm:text-3xl">
        <div className="block font-bold text-gray-700 lg:text-2xl md:text-5xl sm:text-3xl mb-8 pl-8">
          We enjoy creating a variety of destinations and creating experience
          packages so customers can always find something new and exciting or
          jsut a change of view for relaxation.
        </div>
        <div className="block font-serif font-bold text-gray-800 lg:text-2xl md:text-2xl sm:text-2xl pl-8">
          <button className="font-semibold bg-primary-orange text-gray-100 inline-block p-6 px-10 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
