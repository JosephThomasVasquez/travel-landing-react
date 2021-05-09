import React, { useState } from "react";
import heroImage from "../images/pexels-artem-beliaikin-2106776_Sky_FadeOut.jpg";

const Hero = () => {
  const [heroImg, setHeroImg] = useState({
    img: heroImage,
  });

  return (
    <div>
      <img src={heroImg.img} alt="" className="static" />
      <div className="search-packages bg-sky-blue py-8 max-w-5xl relative bottom-32 right-0 h-32 ...">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 col-span-3 ...">
            <h2 className="flex items-start">
              Location
              <span>
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </h2>
            <input type="text" name="location" id="" />
          </div>
          <div className="row-span-3 col-span-3 ...">
            <h2 className="flex items-start">
              Date
              <span>
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </h2>
            <input type="date" name="location" id="" className="max-w-6/12" />
            <input type="date" name="location" id="" className="max-w-6/12" />
          </div>
          <div className="row-span-3 col-span-3 ... max-w-3/12">
            <h2 className="flex items-start">
              Average Price
              <span>
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </h2>
            <input type="text" name="location" id="" />
          </div>
          <div className="row-span-3 col-span-3 ... max-w-3/12">
            <h2 className="text-center bg-primary-orange">Search</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
