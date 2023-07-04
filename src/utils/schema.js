// Packages
import * as yup from 'yup';
// Schema de validation pour le formulaire
export const schemaForm = yup
  .object()
  .shape({
    lastName: yup.string().required('Le nom est requis'),
    firstName: yup.string().required('Le prénom est requis'),
    phone: yup.string().required('Le téléphone est requis'),
    email: yup
      .string()
      .email("L'email est invalide")
      .required("L'email est requis"),
    nbPeople: yup
      .number()
      .positive('Le nombre de personnes doit être positif')
      .integer('Le nombre de personnes doit être un entier')
      .required('Le nombre de personnes est requis'),
    duration: yup
      .number()
      .positive('La durée doit être positive')
      .integer('La durée doit être un entier')
      .required('La durée est requise'),
    entryDate: yup.date().required("La date d'entrée est requise"),
  })
  .required();
