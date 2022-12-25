import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  count: 3,
};

export const totalRecordReducerSlice = createSlice({
  name: "totalRecord",
  initialState,
  reducers: {
    incrementer: (state) => {
      state.count++;
    },
    decrementer: (state) => {
      state.count--;
    },
  },
});

export const {incrementer, decrementer} =totalRecordReducerSlice.actions;
export default totalRecordReducerSlice.reducer;
