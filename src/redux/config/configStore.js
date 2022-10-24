import { configureStore } from "@reduxjs/toolkit";
import usersSlice from '../modules/usersSlice';

const store = configureStore({
  reducer:{
  usersSlice: usersSlice
  },
})


export default store;