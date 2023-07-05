import React, { useState } from 'react';
import AddReservationModal from '../Modal/AddReservationModal';
// Icones
import { Plus, TrashSimple } from '@phosphor-icons/react';
// Redux
import { useDispatch } from 'react-redux';
import { clearList } from '../../reducers/reservationSlice';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-between mx-auto p-4 items-center sticky top-0 bg-gray-200 z-20">
      <React.Fragment>
        <span className="title">CampBooking</span>
        <div className="flex items-center">
          <button
            onClick={() => setModalOpen(true)}
            className="flex gap-4 items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-green-600"
          >
            <Plus size="20" />
            <span className="hidden sm:flex">Ajouter une réservation</span>
          </button>
          <button
            onClick={() => dispatch(clearList())}
            className="flex gap-4 items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-green-600"
          >
            <TrashSimple size="20" />
            <span className="hidden sm:flex"> Supprimer tout</span>
          </button>
        </div>
        <AddReservationModal
          isOpen={isModalOpen}
          onRequestClose={() => setModalOpen(false)}
        />
      </React.Fragment>
    </div>
  );
};

export default Navbar;
