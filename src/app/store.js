import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import loggedIn from "../features/loggedInSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    loggedIn: loggedIn,
  },
});
