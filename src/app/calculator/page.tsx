"use client";
import React, { useState, useEffect } from "react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(102380);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [monthlyPayment, setMonthlyPayment] = useState(3217);

  // Simulated payment breakdown (for simplicity)
  const breakdown = {
    principalInterest: 580,
    propertyTaxes: 265,
    homeownersInsurance: 132,
    hoaFees: 132,
    utilities: 100,
  };

  // Add this calculation function
  const calculateMonthlyPayment = (
    price: number,
    down: number,
    rate: number,
    years: number
  ) => {
    if (price <= 0 || down < 0 || rate <= 0 || years <= 0) {
      return 0;
    }

    const principal = price - down;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;

    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return Math.max(0, Math.round(monthlyPayment));
  };

  // Update handleInputChange function
  const handleInputChange = () => {
    const newMonthlyPayment = calculateMonthlyPayment(
      homePrice,
      downPayment,
      interestRate,
      loanTerm
    );
    setMonthlyPayment(newMonthlyPayment);
  };

  // Add useEffect to recalculate when inputs change
  useEffect(() => {
    handleInputChange();
  }, [homePrice, downPayment, interestRate, loanTerm, handleInputChange]);

  // Update your home price input handler
  const handleHomePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(e.target.value);
    setHomePrice(newPrice);
    // Automatically update down payment to 20%
    setDownPayment(Math.round(newPrice * 0.2));
  };
  const formatCurrency = (value: number): string => {
    return `$${value.toLocaleString("en-US")}`;
  };

  // const handleInputChange = () => {
  //   // Logic to recalculate the mortgage based on inputs would go here
  //   setMonthlyPayment((homePrice * (interestRate / 100)) / 12);
  // };

  return (
    <div className="p-8 bg-green-50 pt-[15%]">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Mortgage Calculator
      </h1>
      <p className="text-lg text-center mb-6">
        Our mortgage calculator includes key factors like homeowners&apos;
        association fees, property taxes, and private mortgage insurance (PMI).
        Get the whole picture and calculate your total monthly payment.
      </p>

      <div className="flex mb-6 justify-between">
        <div>
          <label className="block text-lg font-semibold">Home Price</label>
          <input
            type="text"
            min="0"
            max="3000000"
            value={formatCurrency(homePrice)}
            onChange={handleHomePriceChange}
            className="w-full"
          />
        </div>

        <div className="flex mb-6 ">
          <div>
            <label className="block text-lg font-semibold">
              Monthly payment
            </label>
            <input
              type="text"
              min="832"
              max="15799"
              value={formatCurrency(monthlyPayment)}
              onChange={(e) => setHomePrice(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        <button className="bg-green-700 text-white px-5 rounded-3xl hover:bg-green-900 transition duration-300">
          Get pre-paid
        </button>
      </div>

      <input
        type="range"
        className={`
    // Base styles
    w-full
    cursor-pointer
    appearance-none
    focus:outline-none
    bg-black
    rounded-lg

    // Disabled states
    disabled:pointer-events-none
    disabled:opacity-50

    // Webkit Slider Thumb (Chrome, Safari, Edge)
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:-mt-1.5
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-black
    [&::-webkit-slider-thumb]:transition-all
    [&::-webkit-slider-thumb]:duration-150
    [&::-webkit-slider-thumb]:ease-in-out

    // Webkit Slider Track
    [&::-webkit-slider-runnable-track]:h-1
    [&::-webkit-slider-runnable-track]:w-full
    [&::-webkit-slider-runnable-track]:rounded-full
    [&::-webkit-slider-runnable-track]:bg-black

    // Mozilla Range Thumb (Firefox)
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:h-2.5
    [&::-moz-range-thumb]:w-2.5
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:bg-black
    [&::-moz-range-thumb]:border-4
    [&::-moz-range-thumb]:transition-all
    [&::-moz-range-thumb]:duration-150
    [&::-moz-range-thumb]:ease-in-out

    // Mozilla Range Track
    [&::-moz-range-track]:h-2
    [&::-moz-range-track]:w-full
    [&::-moz-range-track]:rounded-full
    [&::-moz-range-track]:bg-gray-100
  `}
        min="50000"
        max="3000000"
        step="100"
        value={homePrice}
        onChange={(e) => setHomePrice(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, 
      rgb(22 163 74) ${(homePrice / 3000000) * 100}%, 
      rgb(229 231 235) ${(homePrice / 3000000) * 100}%)`,
        }}
      />
      <div className="grid grid-cols-4 grid-rows-2">
        <div className="col-span-2">
          <label className="block text-lg font-semibold">ZIP code</label>
          <input
            type="text"
            value="404443"
            readOnly
            className="px-4 py-2 bg-white border rounded-md shadow-sm"
          />
        </div>
        <div className="col-span-2 pr-2">
          <label className="block text-lg font-semibold">Down Payment</label>
          <input
            type="number"
            value={(homePrice * 20) / 100}
            onChange={(e) => setDownPayment(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm"
          />
        </div>
        <div className="col-span-2 pl-2">
          <label className="block text-lg font-semibold">
            Interest Rate (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm"
          />
        </div>
        <div className="col-span-2 mb-6">
          <label className="block text-lg font-semibold">Loan Term</label>
          <select
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm"
          >
            <option value={15}>15 years</option>
            <option value={30}>30 years</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="text-center text-3xl font-semibold mb-8 ">
          <p>
            Monthly Payment: <br /> ${monthlyPayment.toFixed(2)}/mo
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8 ">
          <h2 className="text-xl font-bold mb-4">Monthly Payment Breakdown</h2>
          <div className="flex flex-col justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm">Principal & Interest</p>
              <p className="font-semibold">${breakdown.principalInterest}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm">Property Taxes</p>
              <p className="font-semibold">${breakdown.propertyTaxes}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm">Homeowners Insurance</p>
              <p className="font-semibold">${breakdown.homeownersInsurance}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm">HOA Fees</p>
              <p className="font-semibold">${breakdown.hoaFees}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm">Utilities</p>
              <p className="font-semibold">${breakdown.utilities}</p>
            </div>
          </div>

          <button
            onClick={handleInputChange}
            className="w-full bg-green-600 text-white p-4 rounded-md"
          >
            Copy estimate link
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg">How does a mortgage calculator help me?</p>
        <p className="text-base">
          When deciding how much house you can afford, one of the most important
          pieces to determine is whether a home will fit into your monthly
          budget. A mortgage calculator helps you understand the monthly cost of
          a home. And allows you to enter different loan amounts and interest
          rates to help determine what&apos;s affordable for you.
        </p>
      </div>
    </div>
  );
};

export default MortgageCalculator;
