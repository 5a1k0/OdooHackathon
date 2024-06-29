import React from 'react';

export default function HomePageBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img 
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" 
        alt="" 
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-md">
          Welcome to NutriPlan!!
        </h1>
        <button className="px-8 py-4 bg-green-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out">
          Add/Update Your Health Details
        </button>
      </div>
    </div>
  );
}