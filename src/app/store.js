import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import loggedIn from "../features/loggedInSlice";
import askedQuestionsReducer from "../features/askedQuestionsSlice";
import answeredQuestionsReducer from "../features/answeredQuestionsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    loggedIn: loggedIn,
    questions: askedQuestionsReducer,
    answeredQuestions: answeredQuestionsReducer,
  },
});

export default store.reducer;
