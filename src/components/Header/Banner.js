import React from 'react';

const Banner = ({ setSort }) => {
  return (
    <section className="relative py-48 px-4">
      <div className="relative text-white container mx-auto flex gap-4 flex-col">
        <h1 className="pb-4 text-xl font-bold">
          Réalisons les rêves de nos clients : un pas de plus vers des aventures
          inoubliables. Entrez et modifiez vos réservations maintenant !
        </h1>
        <p>Nos filtres pratiques </p>
        <div className="flex flex-wrap">
          <button
            onClick={() => setSort('all')}
            className="flex gap-4 items-center text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2"
          >
            Tout
          </button>
          <button
            onClick={() => setSort('paid')}
            className="flex gap-4 items-center text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2"
          >
            Réservations payées
          </button>
          <button
            onClick={() => setSort('unpaid')}
            className="flex gap-4 items-center text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2"
          >
            Réservations impayées
          </button>
        </div>
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
