import React, { useState } from "react";

const Checkbox = ({ checked }) => {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex items-center rounded-full cursor-pointer"
        htmlFor="checkbox"
      >
        <input
          type="checkbox"
          className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none rounded-[4.2px] border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#0071E3] checked:bg-[#0071E3] hover:before:opacity-10"
          id="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[6.67px] w-[7px]"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
