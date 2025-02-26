"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  const [isactive, setIsActive] = React.useState({
    sideNav: false,
  });
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-white shadow-md fixed z-10 w-screen">
        {/* Logo Section */}
        <div className="font-bold text-xl">Better</div>

        {/* Right side - Icons and Buttons */}
        <div className="flex items-center space-x-6">
          {/* Phone Icon */}
          <button className="border border-gray-300 rounded-full p-2">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              className="transition-all ease-in-out group-hover:[&amp;_path]:fill-interactiveForegroundInversePrimary [&amp;_path]:fill-white h-3 w-3 md:h-4 md:w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                fill="#292B29"
              ></path>
            </svg>
          </button>
          {/* Get Started Button */}
          <Link href="/start">
            <button className="bg-green-700 text-white py-2 px-4 rounded-2xl hover:bg-green-900 transition duration-300">
              Get Started
            </button>
          </Link>
          {/* Hamburger Icon for Mobile */}
          <button
            className="lg:hidden text-gray-700 z-[100] "
            onClick={() => setIsActive({ sideNav: !isactive.sideNav })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 mr-[15%]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
      {isactive.sideNav && (
        <div className="mt-16">
          {/* Side Navigation */}
          <div
            className={`lg:flex lg:items-start lg:space-x-6 lg:px-8 lg:py-4 absolute bg-white w-screen p-6 shadow-md space-y-6 lg:relative z-[100] " `}
          >
            {/* Logo */}
            <div className="text-2xl font-bold">Better</div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-lg">
                <span>Buy</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <span>Refinance</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <span>HELOC</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <span>Rates</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <span>Better+</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-green-100 text-center py-3 mt-6 rounded-lg">
              <p className="text-gray-700">
                <span className="font-bold text-gray-800">
                  Call us anytime at{" "}
                </span>
                <a href="tel:+41552388371" className="text-blue-600">
                  (415) 523 88371
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
