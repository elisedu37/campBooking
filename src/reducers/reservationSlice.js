import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: [],
  reducers: {
    // Ajouter une réservation à la liste
    addReservation(state, action) {
      state.push({
        id: action.payload.id,
        lastName: action.payload.lastName,
        firstName: action.payload.firstName,
        phone: action.payload.phone,
        email: action.payload.email,
        nbPeople: action.payload.nbPeople,
        duration: action.payload.duration,
        entryDate: action.payload.entryDate,
        paid: false,
      });
    },
    // Supprimer une réservation de la liste
    deleteReservation(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    // Modifier les détails d'une réservation
    editReservation(state, action) {
      const { id, ...updatedData } = action.payload;

      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...updatedData,
          };
        }
        return item;
      });
    },
    // Vider la liste des réservations
    clearList(state) {
      state.splice(0, state.length);
    },
    // Marquer une réservation comme payée
    paidReservation: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            paid: true,
          };
        }
        return item;
      });
    },
  },
});

export const {
  addReservation,
  deleteReservation,
  editReservation,
  clearList,
  paidReservation,
} = reservationSlice.actions;
export default reservationSlice.reducer;
