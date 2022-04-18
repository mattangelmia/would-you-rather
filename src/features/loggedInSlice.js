import React from "react";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: [],
};

export const loggedIn = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      console.log(action.payload);
      state.authUser = action.payload;
    },
  },
});

export default loggedIn.reducer;
export const { setLoggedInUser } = loggedIn.actions;
