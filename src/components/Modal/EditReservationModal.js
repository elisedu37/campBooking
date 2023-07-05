import React, { useState } from 'react';
// Redux + reducers
import { useDispatch } from 'react-redux';
import { editReservation } from '../../reducers/reservationSlice';
// Form + schema YUP
import { useForm } from 'react-hook-form';
import { schemaForm } from '../../utils/schema';
// Packages
import ReactModal from 'react-modal';

/**
 * Modal qui sert à l'édition d'une réservation
 * @param {boolean} isOpen la modal est ouverte ou fermer
 * @param {function} onRequestClose fermeture de la modal
 * @param {object} prevValue valeur par défault
 * @returns {JSX}
 */
const EditReservationModal = ({ isOpen, onRequestClose, prevValue }) => {
  const dispatch = useDispatch();
  // Pour le formulaire
  const { register, handleSubmit, reset } = useForm();
  // Gestion des erreurs
  const [validationError, setValidationError] = useState(null);

  // Fonction exécuter à la soumission du formulaire d'ajout
  const onSubmit = async (data) => {
    try {
      await schemaForm.validate(data);
      dispatch(
        editReservation({
          id: prevValue.id,
          ...data,
        })
      );
      reset();
      onRequestClose();
    } catch (error) {
      setValidationError(error.message);
      console.error(error);
    }
  };

  // Liste des champs du formulaire
  const inputFields = [
    {
      name: 'lastName',
      placeholder: 'Nom',
      defaultValue: prevValue.lastName,
    },
    {
      name: 'firstName',
      placeholder: 'Prénom',
      defaultValue: prevValue.firstName,
    },
    {
      name: 'phone',
      placeholder: 'Téléphone',
      defaultValue: prevValue.phone,
    },
    {
      name: 'email',
      placeholder: 'Email',
      defaultValue: prevValue.email,
    },
    {
      name: 'nbPeople',
      placeholder: 'Nombre de personnes',
      defaultValue: prevValue.nbPeople,
    },
    {
      name: 'duration',
      placeholder: 'Durée',
      defaultValue: prevValue.duration,
    },
    {
      name: 'entryDate',
      placeholder: "Date d'entrée",
      defaultValue: prevValue.entryDate,
      type: 'date',
    },
  ];

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ajouter une réservation"
      className="w-2/4 h-2/4 m-auto overflow-auto p-5 custom-modal"
      ariaHideApp={false}
    >
      <p>
        Editer la réservation de {prevValue.lastName} {prevValue.firstName}
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4  overflow-auto"
      >
        {inputFields.map((field, index) => (
          <input
            key={index}
            {...register(field.name)}
            defaultValue={field.defaultValue}
            placeholder={field.placeholder}
            type={field.type ?? field.type}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-4"
          />
        ))}
        {validationError && <p className="error">{validationError}</p>}
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2"
        >
          Soumettre
        </button>
      </form>
    </ReactModal>
  );
};

export default EditReservationModal;
