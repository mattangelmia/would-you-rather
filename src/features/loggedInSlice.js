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
      state.authUser = action.payload;
    },
    logOutUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});

export default loggedIn.reducer;
export const { setLoggedInUser, logOutUser } = loggedIn.actions;
