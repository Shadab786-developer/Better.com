// components/StartScreen.js
"use client";

import React from "react";

export default function StartScreen() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-4 pt-[20%]">
      {/* Header */}

      {/* Hero Section */}
      <div className="text-center mb-12">
        <img
          src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg" // Make sure to place your logo or replace this with an actual image
          alt="Better Mortgage"
          width={120}
          height={40}
          className="rounded-full ml-8"
        />
        <h1 className="text-3xl font-semibold text-gray-900">Hi, I'm Betsy!</h1>
        <p className="text-lg text-gray-600 mt-4">What can I help you with?</p>
      </div>

      {/* Options */}
      <div className="space-y-4 mb-12">
        <button className="flex items-center justify-start space-x-8 w-full py-3 px-4 rounded-lg shadow-lg border-2 border-gray-500 hover:border-4  hover:border-green-800 hover:text-green-900 font-bold">
          <svg
            fill="transparent"
            height="36"
            viewBox="0 0 36 36"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="start-purchase-icon">Start Purchase</title>
            <path
              d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z"
              fill="#017848"
            ></path>
            <path
              d="M16.8 13v2.374h-1.2a3.607 3.607 0 0 0-3.118 1.78 3.527 3.527 0 0 0 0 3.56 3.607 3.607 0 0 0 3.118 1.78h4.8c.429 0 .825.227 1.04.594.214.367.214.82 0 1.187-.215.367-.611.593-1.04.593h-4.8c-.318 0-.624-.125-.849-.347a1.18 1.18 0 0 1-.351-.84H12c0 .945.38 1.85 1.054 2.518a3.622 3.622 0 0 0 2.546 1.043h1.2v2.373h2.4v-2.373h1.2a3.607 3.607 0 0 0 3.118-1.78 3.526 3.526 0 0 0 0-3.56A3.607 3.607 0 0 0 20.4 20.12h-4.8c-.429 0-.825-.226-1.04-.593a1.176 1.176 0 0 1 0-1.187c.215-.367.611-.594 1.04-.594h4.8c.318 0 .624.125.849.348.225.222.351.524.351.84H24c0-.945-.38-1.85-1.054-2.519a3.621 3.621 0 0 0-2.546-1.042h-1.2V13h-2.4Z"
              fill="#017848"
            ></path>
          </svg>
          <span className="text-lg  pr-40 ">Buying a home</span>
        </button>

        <button
          className="flex items-center justify-start space-x-8 w-full py-3 px-4 rounded-lg shadow-lg border-2 border-gray-500 hover:border-4  hover:border-green-800 hover:text-green-900 font-bold"
          onClick={() => {
            window.location.href = "/calculator";
          }}
        >
          <svg
            fill="transparent"
            height="36"
            viewBox="0 0 36 36"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="start-refinance-icon">Start Refinance</title>
            <path
              d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z"
              fill="#017848"
            ></path>
            <path
              d="M17.6 15v1.768h-.9c-.965 0-1.856.505-2.338 1.326a2.61 2.61 0 0 0 0 2.651 2.709 2.709 0 0 0 2.338 1.326h3.6c.322 0 .619.169.78.442a.87.87 0 0 1 0 .884.903.903 0 0 1-.78.442h-3.6a.908.908 0 0 1-.636-.259.876.876 0 0 1-.264-.625H14c0 .704.284 1.378.79 1.876a2.725 2.725 0 0 0 1.91.776h.9v1.768h1.8v-1.768h.9c.965 0 1.856-.505 2.338-1.326a2.61 2.61 0 0 0 0-2.651 2.709 2.709 0 0 0-2.338-1.326h-3.6a.903.903 0 0 1-.78-.442.87.87 0 0 1 0-.884.903.903 0 0 1 .78-.442h3.6c.239 0 .468.093.636.259.17.165.264.39.264.625H23c0-.704-.285-1.378-.79-1.876a2.725 2.725 0 0 0-1.91-.776h-.9V15h-1.8Z"
              fill="#017848"
            ></path>
            <path
              d="M18.456 10C12.5 10 7.67 14.83 7.67 20.785H6l2.869 4.782 2.865-4.782h-1.667a8.383 8.383 0 0 1 8.389-8.388 8.383 8.383 0 0 1 8.389 8.388 8.383 8.383 0 0 1-8.39 8.389 8.32 8.32 0 0 1-5.919-2.469l-1.702 1.702a10.73 10.73 0 0 0 7.622 3.164c5.956 0 10.785-4.83 10.785-10.786C29.241 14.83 24.411 10 18.456 10Z"
              fill="#017848"
            ></path>
          </svg>
          <span className="text-lg  pr-40 ">Refinance my mortgage</span>
        </button>

        <button className="flex items-center justify-start space-x-8 w-full py-3 px-4 rounded-lg shadow-lg border-2 border-gray-500 hover:border-4  hover:border-green-800 hover:text-green-900 font-bold">
          <svg
            fill="transparent"
            height="36"
            viewBox="0 0 36 36"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="start-cashout-refinance-icon">
              Start Cashout Refinance
            </title>
            <path
              d="M2.25 18a15.75 15.75 0 0 1 31.5 0H36a18 18 0 1 0-18 18v-2.25A15.75 15.75 0 0 1 2.25 18Z"
              fill="#017848"
            ></path>
            <path
              d="M23.143 20.204c0-.877-.352-1.718-.98-2.338a3.363 3.363 0 0 0-2.363-.968h-4.457c-.398 0-.766-.21-.965-.551a1.092 1.092 0 0 1 0-1.102c.199-.341.567-.551.965-.551H19.8c.296 0 .579.116.788.323.209.206.326.487.326.779h2.229c0-.877-.352-1.718-.98-2.338a3.363 3.363 0 0 0-2.363-.968h-1.114v-2.204h-2.229v2.204h-1.114a3.35 3.35 0 0 0-2.895 1.653 3.275 3.275 0 0 0 0 3.306 3.35 3.35 0 0 0 2.895 1.653H19.8c.398 0 .766.21.965.551.199.341.199.761 0 1.102-.199.341-.567.551-.965.551h-4.457a1.12 1.12 0 0 1-.788-.323 1.096 1.096 0 0 1-.326-.779H12c0 .877.352 1.718.979 2.338.627.62 1.477.968 2.364.968h1.114v2.204h2.229V23.51H19.8c.887 0 1.737-.348 2.364-.968.627-.62.979-1.461.979-2.338ZM29.852 19.97a1.13 1.13 0 0 0-1.429 0l-5.714 4.653a1.17 1.17 0 0 0-.423.907v9.307c0 .308.12.604.334.822.215.218.506.341.809.341h11.428c.303 0 .594-.123.808-.34.215-.219.335-.515.335-.823V25.53a1.171 1.171 0 0 0-.434-.907l-5.714-4.654Zm3.862 13.703H31.43v-3.49c0-.308-.12-.604-.335-.822a1.133 1.133 0 0 0-.808-.34H28c-.303 0-.594.122-.808.34a1.174 1.174 0 0 0-.335.822v3.49h-2.285V26.09l4.571-3.723 4.571 3.723v7.584Z"
              fill="#017848"
            ></path>
          </svg>
          <span className="text-lg  pr-40 ">Get cash from my home</span>
        </button>
      </div>

      {/* Stats Section */}
      <div className="text-center mb-8">
        <div className="flex justify-center space-x-6">
          <div className="text-2xl font-semibold text-green-600">$100B</div>
          <div className="text-2xl font-semibold text-green-600">400K</div>
        </div>
        <div className="text-sm text-gray-500 mt-2">
          <p>home loans funded entirely online</p>
          <p>Customers who chose a Better Mortgage</p>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-green-50 p-4 rounded-lg text-center">
        <p className="text-sm text-green-700">
          After a few questions, you'll unlock:
        </p>
        <div className="mt-2 space-y-1">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-green-600">✅</span>
            <span className="text-gray-600">Custom mortgage rates</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-green-600">💰</span>
            <span className="text-gray-600">Exclusive offers</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-green-600">📱</span>
            <span className="text-gray-600">A personalized dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
}
