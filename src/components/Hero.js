import React, { useState } from "react";
import heroImage from "../images/pexels-artem-beliaikin-2106776_Sky_FadeOut.jpg";

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
            <input type="text" name="location" id="location" placeholder="Italy" />
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
            <input type="text" name="average-price" id="average-price" placeholder="$159 - $299" />
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
