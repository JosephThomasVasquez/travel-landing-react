import React, { useState } from "react";
import heroImage from "../images/pexels-artem-beliaikin-2106776_Resize_03.jpg";
import DateTimeLine from "./DateTimeLine";

const Hero = () => {
  const [heroImg, setHeroImg] = useState({
    img: heroImage,
  });

  const [dates, setDates] = useState({ begin: "2021/5/10", end: "2021/7/15" });

  const setDateFormat = (rawDate) => {
    // const today = new Date();
  };

  const datesHandleChange = (e) => {};

  return (
    <div>
      <img src={heroImg.img} alt="" className="static" />
      <div className="flex ml-24 lg:w-4/6 md:w-6/12 sm:w-6/12 absolute lg:top-48 md:top-40 sm:top-32 h-80 ...">
        <div className="grid grid-cols-1 gap-4">
          <h1 className="block font-serif font-bold text-gray-800 lg:text-8xl md:text-5xl sm:text-3xl">
            Get away for once and see what you're missing!
          </h1>
          <div className="row-span-1 ...">
            <div className="mt-10">
              <i className="fas fa-play text-primary-orange flex items-center justify-center rounded-full bg-sky-blue hover:bg-primary-orange hover:text-sky-blue w-16 h-16  transition-all duration-500 ease-in-out"></i>
              <div className="font-bold relative bottom-11 left-20">Watch Video</div>
            </div>
          </div>
        </div>
      </div>

      <DateTimeLine />

      <div className="search-packages flex items-center float-right bg-sky-blue py-8 w-max relative bottom-32 h-32 ...">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 col-span-3 ... px-8">
            <h2 className="flex items-center">
              Location
              <span>
                <svg
                  className="w-4 h-4 text-primary-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </h2>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Italy"
            />
          </div>
          <div className="row-span-3 col-span-3 ... px-8">
            <h2 className="flex items-center">
              Date
              <span>
                <svg
                  className="w-4 h-4 text-primary-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </h2>
            <div className="grid grid-rows-1 grid-flow-col gap-4">
              <div> Begin: </div>
              <input
                type="date"
                name="begin"
                id="begin"
                className="m-auto"
                palceholder="2021/5/10"
                onChange={datesHandleChange}
              />
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-4">
              <div> End: </div>
              <input
                type="date"
                name="end"
                id="end"
                className="m-auto"
                onChange={datesHandleChange}
              />
            </div>
          </div>
          <div className="row-span-3 col-span-3 ... px-8 max-w-3/12">
            <h2 className="flex items-center">
              Average Price
              <span>
                <svg
                  className="w-4 h-4 text-primary-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </h2>
            <input
              type="text"
              name="average-price"
              id="average-price"
              placeholder="$159 - $299"
            />
          </div>
          <div className="row-span-3 col-span-3 ... px-8 max-w-3/12">
            <button className="font-semibold bg-primary-orange text-gray-100 inline-block p-6 px-10 hover:shadow-lg hover:bg-primary-orange-50 hover:text-gray-100 transition-all duration-500 ease-in-out">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
