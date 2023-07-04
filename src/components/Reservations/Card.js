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
      <div className="flex items-baseline text-gray-900 ">
        <span className="text-5xl font-extrabold tracking-tight">
          {reservation.lastName} {reservation.firstName}
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight text-gray-500 ">
            - {reservation.phone}
          </span>
        </li>
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight text-gray-500 ">
            - {reservation.email}
          </span>
        </li>
      </ul>
      <button
        type="button"
        className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        onClick={() => {
          dispatch(
            editReservation({
              id: reservation.id,
              firstName: 'Patrick',
            })
          );
        }}
      >
        Editer...
      </button>
      <button
        type="button"
        className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        onClick={() => {
          dispatch(
            deleteReservation({
              id: reservation.id,
            })
          );
        }}
      >
        supp...
      </button>
    </div>
  );
};

export default Card;
