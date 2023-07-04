// Redux
import { configureStore } from '@reduxjs/toolkit';
// Reducers
import reservationReducer from '../reducers/reservationSlice';

export default configureStore({
  reducer: {
    reservation: reservationReducer,
  },
});
