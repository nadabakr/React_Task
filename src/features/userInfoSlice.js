import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  id: null,
};

export const userProfileSlice = createSlice({
  name: "totalRecord",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { setUser } = userProfileSlice.actions;
export default userProfileSlice.reducer;
