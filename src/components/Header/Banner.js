import React from 'react';

const Banner = ({ setSort }) => {
  return (
    <section className="relative py-48 px-4">
      <div className="relative text-white container mx-auto">
        <h1 className="pb-8 flex">Rechercher...</h1>
        <button
          onClick={() => setSort('all')}
          className="flex gap-4 items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-green-600"
        >
          Tout
        </button>
        <button
          onClick={() => setSort('paid')}
          className="flex gap-4 items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-green-600"
        >
          Réservations payées
        </button>
        <button
          onClick={() => setSort('unpaid')}
          className="flex gap-4 items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-green-600"
        >
          Réservations impayées
        </button>
      </div>
      <div
        className="absolute inset-0 bg-cover h-96 overflow-hidden"
        style={{ zIndex: '-1' }}
      >
        <img
          src="https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress"
          alt="Photo banner"
        />
      </div>
    </section>
  );
};

export default Banner;
