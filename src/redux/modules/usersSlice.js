import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [
    { },
  ]
};

const usersSlice = createSlice ({
  name: "users",
  initialState,
  reducers: {
    
  },
});


export const {  } = usersSlice.actions;

export default usersSlice.reducer;