import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  home: {
    goodWord: "",
    dday: -0,
  },
  isLoading: false,
  error: null,
};

export const getHome = createAsyncThunk(
  "home", //type
  async (_, thunkAPI) => {
    try {
      console.log("hi");
      const { data } = await axios.get(`http://localhost:3001/home`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},

  extraReducers: {
    [getHome.pending]: (state) => {
      state.isLoading = true;
    },
    [getHome.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.home = action.payload;
    },
    [getHome.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default homeSlice.reducer;
