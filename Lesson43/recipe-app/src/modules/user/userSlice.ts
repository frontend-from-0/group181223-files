import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: '',
    email: '',
  },
  reducers: {
    updateUser: (state, action) => {
      state = {...state, ...action.payload};
    },
    // loging, logout
  },
});


export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
