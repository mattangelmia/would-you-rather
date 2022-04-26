import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import loggedIn from "../features/loggedInSlice";
import askedQuestionsReducer from "../features/askedQuestionsSlice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
    loggedIn: loggedIn,
    questions: askedQuestionsReducer,
  },
});
