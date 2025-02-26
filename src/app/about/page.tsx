import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-900 pt-48">
      {/* Header Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-3xl font-semibold mb-4">Our mission</h1>
        <p className="text-lg max-w-3xl mx-auto">
          We’re making homeownership simpler, faster — and most importantly,
          more accessible for all Americans.
        </p>
      </section>

      {/* Image and Text Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              The status quo is broken
            </h2>
            <p className="text-lg mb-6">
              The traditional process around homeownership is opaque and
              outdated. The real-estate ecosystem is slow, expensive, and
              extremely complicated. We have reimagined the entire home-buying
              experience. It&apos;s faster, more affordable, and better for
              everyone. Read how CEO Vivek Garig explains how we will fix it.
            </p>
            <a href="#" className="text-green-600 font-semibold">
              Read Vivek's story
            </a>
          </div>
          <div className="flex justify-center items-center">
            {/* Placeholder for the video image */}
            <img
              src="https://media.better.com/video/vishal-mission.jpg"
              alt="CEO Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* How We're Changing Things */}
      <section className="bg-green-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">
            How we’re changing things
          </h2>
          <p className="text-lg mb-8">
            Homeownership is a huge part of our economy. Housing accounts for $2
            trillion industries, and mortgage accounts for $15 trillion. We have
            moved mortgage processing to a much faster standard &mdash;
            transforming the mortgage experience and speeding up how homeowners
            finance their homes.
          </p>
          <p className="text-lg">
            That&apos;s why we believe in a simple, fast, and transparent
            process. With tech, we&apos;re making it better and more efficient
            for everyone to help make it finally work for all people.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
