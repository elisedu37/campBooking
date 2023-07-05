import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../reducers/reservationSlice';
import { useForm } from 'react-hook-form';
import { schemaForm } from '../../utils/schema';
import useId from 'react-id-generator';

const AddReservationModal = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [validationError, setValidationError] = useState(null);

  const onSubmit = async (data) => {
    try {
      await schemaForm.validate(data);
      const id = useId();
      dispatch(addReservation({ ...data, id }));
      reset();
      onRequestClose();
    } catch (error) {
      setValidationError(error.message);
      console.error(error);
    }
  };

  const inputFields = [
    { name: 'lastName', placeholder: 'Nom' },
    { name: 'firstName', placeholder: 'Prénom' },
    { name: 'phone', placeholder: 'Téléphone' },
    { name: 'email', placeholder: 'Email' },
    { name: 'nbPeople', placeholder: 'Nombre de personnes' },
    { name: 'duration', placeholder: 'Durée' },
    { name: 'entryDate', placeholder: "Date d'entrée", type: 'date' },
  ];

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ajouter une réservation"
      className="w-2/4 h-2/4 m-auto overflow-auto p-5 custom-modal"
      ariaHideApp={false}
    >
      <p>Ajouter une réservation</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4  overflow-auto"
      >
        {inputFields.map((field, index) => (
          <input
            key={index}
            {...register(field.name)}
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

export default AddReservationModal;
