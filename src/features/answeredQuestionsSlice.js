import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

const initialState = [
  {
    id: 1,
    option1: "code in javascript",
    option2: "code in python",
    askedBy: "matt",
    answeredBy: ["steve", "mike"],
  },

  {
    id: 2,
    option1: "eat italian food",
    option2: "eat chinese food",
    askedBy: "steve",
    answeredBy: ["mike"],
  },
  {
    id: 3,
    option1: "invest into the stock market",
    option2: "invest into the cryptocurrency",
    askedBy: "mike",
    answeredBy: ["matt"],
  },
];

export const answeredQuestionsReducer = createSlice({
  name: "askedQuestionsSlice",
  initialState,
  reducers: {
    addAnsweredQuestion: (state, action) => {
      state.push(action.payload);
      console.log(action.payload.id);
    },
  },
});

export default answeredQuestionsReducer.reducer;
export const { addAnsweredQuestion } = answeredQuestionsReducer.actions;
