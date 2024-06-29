import React from 'react';

export default function CategoryWiseDisplay() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Personalized Nutrition</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Discover the Best Diet Plans for You
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Explore various diet plans tailored to meet your health goals. Whether you need low carbs, high proteins, or balanced nutrition, we have something for you.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {[
              {
                title: 'Low Carb Diet',
                description: 'Ideal for weight loss and improving metabolic health. This plan focuses on reducing carbohydrate intake while maintaining essential nutrients.',
                icon: '🍽️', // Replace with a suitable icon
                link: '#'
              },
              {
                title: 'High Protein Diet',
                description: 'Designed to help build muscle and improve strength. This plan emphasizes high protein intake with balanced carbs and fats.',
                icon: '🥩', // Replace with a suitable icon
                link: '#'
              },
              {
                title: 'Balanced Diet',
                description: 'A balanced approach to nutrition that includes all food groups in appropriate amounts. Ideal for maintaining overall health.',
                icon: '🥗', // Replace with a suitable icon
                link: '#'
              },
              {
                title: 'Keto Diet',
                description: 'A low-carb, high-fat diet that can help you burn fat more effectively. Popular for weight loss and improving certain health conditions.',
                icon: '🥑', // Replace with a suitable icon
                link: '#'
              }
            ].map((plan) => (
              <div key={plan.title} className="relative bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300">
                <a href={plan.link} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-2xl">
                      {plan.icon}
                    </div>
                  </div>
                  <div>
                    <dt className="text-base font-semibold leading-7 text-white">
                      {plan.title}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-400">
                      {plan.description}
                    </dd>
                  </div>
                </a>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex justify-center">
            <button className="px-8 py-3 bg-indigo-600 text-white text-lg font-bold rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out">
              View More Diet Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}