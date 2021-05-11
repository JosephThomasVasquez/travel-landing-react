import React, { useState } from "react";

const DateTimeLine = () => {
  const [dates, setDates] = useState();

  const handleDateChange = () => {};

  return (
    <div className="flex items-center absolute top-64 right-0 mr-8">
      <div className="container w-10">
        
        <div className="font-bold text-2xl text-center text-gray-700 my-6">
          01
        </div>
        
        <div className="bg-gray-700 w-3 h-3 rounded-full mx-auto my-6"></div>
        
        <div className="bg-primary-orange w-3 h-3 rounded-full mx-auto my-6"></div>
        
        <div className="bg-gray-700 w-3 h-3 rounded-full mx-auto my-6"></div>
        
        <div className="font-bold text-2xl text-center text-gray-700 mt-6 mb-12">
          05
        </div>

        <div className="">
          <svg
            className="w-6 h-6 mx-auto text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>

        <div className="">
          <svg
            className="w-6 h-6 mx-auto text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DateTimeLine;
