import React from 'react';
// Redux + reducers
import { useDispatch } from 'react-redux';
import {
  deleteReservation,
  paidReservation,
} from '../../reducers/reservationSlice';
// Icones
import { ArrowsClockwise } from '@phosphor-icons/react';
// Modal
import EditReservationModal from '../Modal/EditReservationModal';

/**
 * Carte pour une réservation
 * @param {object} reservation toutes les informations sur la réservation
 * @param {boolean} isEditModalOpen gestion ouverture / fermeture de la modal d'édition
 * @param {function} setEditModalOpen setter pour l'ouverture et la fermeture de la modal
 * @returns {JSX}
 */
const Card = ({ reservation, setEditModalOpen, isEditModalOpen }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={reservation.id}
      className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 flex flex-col gap-4"
    >
      <React.Fragment>
        <div>
          <span
            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 flex flex-row gap-2 items-center fit"
            onClick={() => {
              dispatch(
                paidReservation({
                  id: reservation.id,
                })
              );
            }}
          >
            {reservation.paid ? (
              <>Payé</>
            ) : (
              <>
                Impayé <ArrowsClockwise size={14} />
              </>
            )}
          </span>
          <div className="flex items-baseline text-gray-900">
            <span className="text-5xl font-extrabold tracking-tight">
              {reservation.lastName} {reservation.firstName}
            </span>
          </div>
        </div>
        <div className="py-4 border-b border-t border-solid border-gray-900 flex flex-col gap-4">
          <span className="text-gray-500 uppercase font-bold">Contact</span>
          <ul role="list" className="space-y-2">
            <li className="flex space-x-3">
              <span>Téléphone : {reservation.phone}</span>
            </li>
            <li className="flex space-x-3">
              <span>Mail : {reservation.email}</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-gray-500 uppercase font-bold">Réservation</span>
          <ul role="list" className="space-y-2">
            <li className="flex space-x-3">
              <span>NB de personnes : {reservation.nbPeople}</span>
            </li>
            <li className="flex space-x-3">
              <span>Date d'entrée : {reservation.entryDate}</span>
            </li>
            <li className="flex space-x-3">
              <span>Durée : {reservation.duration}</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm p-4 inline-flex justify-center w-full text-center"
            onClick={() => setEditModalOpen(true)}
          >
            Editer
          </button>
          <button
            type="button"
            className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm p-4 inline-flex justify-center w-full text-center"
            onClick={() => {
              dispatch(
                deleteReservation({
                  id: reservation.id,
                })
              );
            }}
          >
            Supprimer
          </button>
        </div>
        <EditReservationModal
          isOpen={isEditModalOpen}
          onRequestClose={() => setEditModalOpen(false)}
          prevValue={reservation}
        />
      </React.Fragment>
    </div>
  );
};

export default Card;
