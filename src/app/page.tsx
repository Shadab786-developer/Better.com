"use client";
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white pt-32 pb-32">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="w-2/3">
              <h1 className="text-6xl font-bold leading-tight mb-8">
                Mortgages made simple
              </h1>
              <div className="flex mb-6 items-center">
                <button className="bg-green-600 text-white py-2 px-6 rounded-3xl text-nowrap shadow-lg hover:bg-green-500 transition duration-300">
                  Start my approval
                </button>
                <span className="ml-8 text-lg text-white">
                  3 min | No credit impact
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_328_5133)">
                    <path
                      d="M23.9998 12.2755C23.9998 11.4598 23.9324 10.6397 23.7884 9.83716H12.2405V14.4581H18.8534C18.579 15.9485 17.6973 17.2669 16.4062 18.1047V21.103H20.3515C22.6683 19.013 23.9998 15.9264 23.9998 12.2755Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M12.2394 24.0003C15.5414 24.0003 18.326 22.9377 20.3549 21.1034L16.4096 18.1051C15.3119 18.837 13.8949 19.2515 12.2439 19.2515C9.04991 19.2515 6.34175 17.1394 5.37006 14.2998H1.29883V17.3907C3.37718 21.4429 7.61036 24.0003 12.2394 24.0003Z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M5.36724 14.299C4.8544 12.8086 4.8544 11.1948 5.36724 9.70447V6.61353H1.30051C-0.435945 10.0043 -0.435945 13.9992 1.30051 17.3899L5.36724 14.299Z"
                      fill="#FBBC04"
                    ></path>
                    <path
                      d="M12.2394 4.74868C13.9849 4.72223 15.6718 5.36599 16.9359 6.54769L20.4314 3.12164C18.218 1.08453 15.2805 -0.0354426 12.2394 -0.000167897C7.61036 -0.000167897 3.37718 2.55725 1.29883 6.61383L5.36556 9.70477C6.33276 6.86075 9.04541 4.74868 12.2394 4.74868Z"
                      fill="#EA4335"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_328_5133">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                <span className="ml-2 text-sm">
                  4.5 stars | 367 Google reviews
                </span>
              </div>
            </div>
            <div className="w-1/3">
              <Image
                src="https://media.better.com/better-com/homepage/hero-variant-c.webp" // Placeholder image
                alt="Phone mockup"
                className="w-full rounded-lg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <p>{`Let's find your perfect home loan`}</p>

      {/* Testimonial Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">
            {`Find out why we're better.`}
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <button className="bg-green-200 text-green-800 py-2 px-4 rounded-lg">
              Adrian
            </button>
            <button className="bg-green-200 text-green-800 py-2 px-4 rounded-lg">
              Amanda
            </button>
            <button className="bg-green-200 text-green-800 py-2 px-4 rounded-lg">
              Paul
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-1/2">
              <div className="bg-gray-200 p-6 rounded-lg">
                <p className="text-xl mb-4">
                  {`"The reason why I decided to go with Better is because
                  after I did my research with the other lenders, Better was the
                  one that provided me with the lowest interest rate."`}
                </p>
                <span className="font-bold text-lg">
                  Adrian - Better Mortgage customer
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <span className="font-semibold text-lg text-gray-800">
              Trustpilot
            </span>
            <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            <span className="ml-2 text-sm text-gray-600">
              Excellent - 4.4 out of 5
            </span>
            <div className="mt-2">
              <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-500 transition duration-300">
                See all our stories
              </button>
            </div>
          </div>
        </div>
      </section>

      <div>{`We're here to help!`}</div>

      {/* FAQ Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            {`Got questions? We've got answers`}
          </h2>
          <div className="flex justify-center space-x-8">
            <button className="bg-white text-green-800 py-2 px-4 rounded-lg shadow-lg hover:bg-green-100 transition duration-300">
              Our products
            </button>
            <button className="bg-white text-green-800 py-2 px-4 rounded-lg shadow-lg hover:bg-green-100 transition duration-300">
              Calculators
            </button>
            <button className="bg-white text-green-800 py-2 px-4 rounded-lg shadow-lg hover:bg-green-100 transition duration-300">
              Guides & FAQs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
