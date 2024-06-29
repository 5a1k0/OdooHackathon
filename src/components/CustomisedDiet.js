import React from 'react';

export default function CustomisedDiet() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Designed for your health goals</h2>
          <p className="mb-5 font-light text-gray-400">
            Choose a plan that fits your lifestyle and dietary needs.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Weekly Plan Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
            <h3 className="mb-4 text-2xl font-semibold">Weekly Plan</h3>
            <p className="font-light text-gray-400 sm:text-lg">
              Ideal for short-term commitments and new diet trials.
            </p>
            <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-6 block">
              View Full Plan
            </a>
          </div>
          {/* Monthly Plan Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
            <h3 className="mb-4 text-2xl font-semibold">Monthly Plan</h3>
            <p className="font-light text-gray-400 sm:text-lg">
              Perfect for ongoing support and balanced nutrition.
            </p>
            <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-6 block">
              View Full Plan
            </a>
          </div>
          {/* Yearly Plan Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
            <h3 className="mb-4 text-2xl font-semibold">Yearly Plan</h3>
            <p className="font-light text-gray-400 sm:text-lg">
              Comprehensive coverage for sustained health benefits.
            </p>
            <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-6 block">
              View Full Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}