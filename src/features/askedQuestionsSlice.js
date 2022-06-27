import { createSlice } from "@reduxjs/toolkit";
import { answeredQuestionsReducer } from "./answeredQuestionsSlice";

const initialState = [
  {
    id: 1,
    option1: { name: "code in javascript", count: 0 },
    option2: { name: "code in python", count: 0 },
    askedBy: "matt",
    answeredBy: [],
  },

  {
    id: 2,
    option1: { name: "eat italian food", count: 0 },
    option2: { name: "eat chinese food", count: 0 },
    askedBy: "steve",
    answeredBy: [],
  },

  {
    id: 3,
    option1: { name: "invest into the stock market", count: 0 },
    option2: { name: "invest into the cryptocurrency", count: 0 },
    askedBy: "mike",
    answeredBy: [],
  },

  {
    id: 4,
    option1: { name: "work with front end", count: 0 },
    option2: { name: "work with back end", count: 0 },
    askedBy: "mike",
    answeredBy: [],
  },

  {
    id: 5,
    option1: { name: "be a superhero", count: 0 },
    option2: { name: "be a supervillian", count: 0 },
    askedBy: "matt",
    answeredBy: [],
  },

  {
    id: 6,
    option1: { name: "Go to beach", count: 0 },
    option2: { name: "Go to pool", count: 0 },
    askedBy: "steve",
    answeredBy: [],
  },
];

export const askedQuestionsReducer = createSlice({
  name: "askedQuestionsSlice",
  initialState,
  reducers: {
    removeAnsweredQuestion: (state, action) => {
      let newState = action.payload;

      return newState;
    },
  },
});

export default askedQuestionsReducer.reducer;
export const { removeAnsweredQuestion } = askedQuestionsReducer.actions;
