import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: [],
  reducers: {
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
    deleteReservation(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
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
    clearList(state) {
      state.splice(0, state.length);
    },
    paidReservation: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
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
