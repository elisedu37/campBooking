import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import Card from './Reservations/Card';

/**
 * Composant qui comprends tout le contenu sur les reservations
 * @param {string} sort filtre actif
 * @returns {JSX}
 */
const Reservations = ({ sort }) => {
  // nombre de réservation
  const count = useSelector((state) => state.reservation.length);
  // Informations sur toutes les reservations
  const reservations = useSelector((state) => state.reservation);

  return (
    <div className="max-w-screen-xl m-auto py-24 flex flex-col gap-4">
      {reservations.length > 0 ? (
        <>
          {sort === 'all' && (
            <>
              <p>Nombre de réservations : {count}</p>
              <div className="flex flex-wrap gap-4">
                {reservations.map((resa) => (
                  <Card reservation={resa} key={resa.id} />
                ))}
              </div>
            </>
          )}

          {sort === 'paid' && (
            <>
              <p>Nombre de réservations : {count}</p>
              <div className="flex flex-wrap gap-4">
                {reservations
                  .filter((resa) => resa.paid === true)
                  .map((resa) => (
                    <Card reservation={resa} key={resa.id} />
                  ))}
              </div>
            </>
          )}

          {sort === 'unpaid' && (
            <>
              <p>Nombre de réservations : {count}</p>
              <div className="flex flex-wrap gap-4">
                {reservations
                  .filter((resa) => resa.paid === false)
                  .map((resa) => (
                    <Card reservation={resa} key={resa.id} />
                  ))}
              </div>
            </>
          )}
        </>
      ) : (
        <p>Aucune réservation</p>
      )}
    </div>
  );
};

export default Reservations;
