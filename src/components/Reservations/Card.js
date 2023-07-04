import React from 'react';
// Redux
import { useDispatch } from 'react-redux';
// Reducers
import {
  deleteReservation,
  editReservation,
} from '../../reducers/reservationSlice';

const Card = ({ reservation }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={reservation.id}
      className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 "
    >
      <span>{reservation.paid}</span>
      <div className="flex items-baseline text-gray-900 ">
        <span className="text-5xl font-extrabold tracking-tight">
          {reservation.lastName} {reservation.firstName}
        </span>
      </div>
      <span>Contact</span>
      <ul role="list" className="space-y-2">
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight text-gray-500 ">
            Téléphone : {reservation.phone}
          </span>
        </li>
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight text-gray-500 ">
            Mail : {reservation.email}
          </span>
        </li>
      </ul>
      <span>Réservation</span>
      <ul role="list" className="space-y-2">
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight text-gray-500 ">
            NB de personnes : {reservation.nbPeople}
          </span>
        </li>
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight text-gray-500 ">
            Date d'entrée : {reservation.entryDate}
          </span>
        </li>
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight text-gray-500 ">
            Durée : {reservation.duration}
          </span>
        </li>
      </ul>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm p-4 inline-flex justify-center w-full text-center"
          onClick={() => {
            dispatch(
              editReservation({
                id: reservation.id,
                firstName: 'Patrick',
              })
            );
          }}
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
    </div>
  );
};

export default Card;
