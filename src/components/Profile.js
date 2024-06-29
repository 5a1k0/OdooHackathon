import React from 'react';

export default function Profile() {
  return (
    <div className="Profilebody">
      <section className='bg-gray-900'>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl flex justify-center items-center">
            <div className="flex items-center justify-center h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Profile Picture" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="space-x-4">
          <div className="flex items-center justify-center gap-5 h-[160px] pb-12">
            <a href="https://www.example.com" className="h-full w-[45%] inline-block px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700 flex items-center justify-center text-2xl font-bold">
              Update Password
            </a>
            <a href="https://www.example2.com" className="h-full w-[45%] inline-block px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700 flex items-center justify-center text-2xl font-bold">
              Fill Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}