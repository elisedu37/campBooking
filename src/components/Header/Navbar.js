import React, { useState } from 'react';
// Icones
import { Plus, TrashSimple } from '@phosphor-icons/react';
// Redux + reducers
import { useDispatch } from 'react-redux';
import { clearList } from '../../reducers/reservationSlice';
// Modal
import AddReservationModal from '../Modal/AddReservationModal';

/**
 * Component qui affiche la barre de navigation
 * @returns {JSX}
 */
const Navbar = () => {
  // Gère l'ouverture et la fermeture de la modal d'ajout
  const [isModalOpen, setModalOpen] = useState(false);
  // Redux
  const dispatch = useDispatch();
  // Liste des boutons
  const buttons = [
    {
      icon: <Plus size="20" />,
      label: 'Ajouter une réservation',
      onClick: () => setModalOpen(true),
    },
    {
      icon: <TrashSimple size="20" />,
      label: 'Supprimer tout',
      onClick: () => dispatch(clearList()),
    },
  ];

  return (
    <div className="w-full flex justify-between mx-auto p-4 items-center sticky top-0 bg-gray-200 z-20">
      <React.Fragment>
        <span className="title">CampBooking</span>
        <div className="flex items-center">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className="flex gap-4 items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-green-600"
            >
              {button.icon}
              <span className="hidden sm:flex">{button.label}</span>
            </button>
          ))}
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
